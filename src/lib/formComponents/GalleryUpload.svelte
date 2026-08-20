<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index.js';
	import { X, CloudUpload as UploadCloud, Image as ImageIcon, Loader, BrushCleaning } from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import { filesProxy } from 'sveltekit-superforms';
	import imageCompression from 'browser-image-compression';
	import { toast } from 'svelte-sonner';

	let {
		form,
		name,
		title = 'Gallery Upload',
		placeholder = 'JPG or PNG, up to 1MB each after compression',
		images = $bindable([])
	} = $props();

	// Use filesProxy for multi-file support with Superforms
	let file = filesProxy(form, name);

	let isDragging = $state(false);
	let isProcessing = $state(false);

	// Reject before attempting compression — decoding a huge phone photo into
	// memory to shrink it can hang the tab for a long time with no feedback.
	const MAX_RAW_BYTES = 25 * 1024 * 1024;

	async function handleFileSelection(newFiles: FileList | null) {
		if (!newFiles || newFiles.length === 0) return;

		const accepted = Array.from(newFiles).filter((f) => f.size <= MAX_RAW_BYTES);
		const rejected = newFiles.length - accepted.length;
		if (rejected > 0) {
			toast.error(`${rejected} photo${rejected === 1 ? '' : 's'} over 25MB skipped.`);
		}
		if (accepted.length === 0) return;

		isProcessing = true;

		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
			initialQuality: 0.8
		};

		try {
			const processed = await Promise.all(
				accepted.map(async (f) => {
					if (!f.type.startsWith('image/')) return f;
					try {
						const compressed = await imageCompression(f, options);
						return new File([compressed], f.name, { type: compressed.type });
					} catch (err) {
						console.error('Compression error:', err);
						return f;
					}
				})
			);

			// Append new files to existing ones in the proxy.
			const currentFiles = Array.from($file ?? []);
			const dt = new DataTransfer();
			[...currentFiles, ...processed].forEach((f) => dt.items.add(f));

			file.set(dt.files);
			toast.success(`${processed.length} photo${processed.length === 1 ? '' : 's'} added`);
		} catch (err) {
			console.error('Selection Error:', err);
			toast.error('Failed to process photos');
		} finally {
			isProcessing = false;
		}
	}

	function removeNewFile(index: number) {
		const current = Array.from($file);
		current.splice(index, 1);
		const dt = new DataTransfer();
		current.forEach((f) => dt.items.add(f));
		file.set(dt.files);
	}

	function removeExistingImage(index: number) {
		images = images.filter((_, i) => i !== index);
	}

	// Local previews for newly-picked files. Built once per `$file` change and
	// revoked on the next change/unmount — createObjectURL inside the each-block
	// would mint a fresh, never-revoked blob URL on every re-render otherwise.
	let previewUrls: string[] = $state([]);
	$effect(() => {
		const urls = Array.from($file ?? []).map((f) => URL.createObjectURL(f));
		previewUrls = urls;
		return () => {
			urls.forEach((url) => URL.revokeObjectURL(url));
		};
	});
</script>

<div class="flex w-full flex-col gap-6">
	<!-- Upload Area -->
	<div class="flex flex-col gap-2">
		{#if title}
			<h3 class="text-sm font-semibold tracking-tight">{title}</h3>
		{/if}
		<Label
			for={name}
			class="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed py-8 transition-all
			{isDragging
				? 'border-primary bg-primary/5'
				: 'border-muted-foreground/25 bg-muted/50 hover:border-primary/50 hover:bg-muted'}"
			ondragover={(e) => {
				e.preventDefault();
				isDragging = true;
			}}
			ondragleave={() => (isDragging = false)}
			ondrop={(e) => {
				e.preventDefault();
				isDragging = false;
				handleFileSelection(e.dataTransfer?.files ?? null);
			}}
		>
			<div class="flex flex-col items-center justify-center gap-3 text-center">
				<div
					class="rounded-full bg-background p-4 shadow-sm transition-transform group-hover:scale-110"
				>
					{#if isProcessing}
						<Loader class="h-6 w-6 animate-spin text-primary" />
					{:else}
						<UploadCloud class="h-6 w-6 {isDragging ? 'text-primary' : 'text-muted-foreground'}" />
					{/if}
				</div>
				<div class="px-4">
					<p class="text-sm font-medium">
						{isProcessing
							? 'Optimizing photos…'
							: isDragging
								? 'Drop them now!'
								: 'Click to upload or drag photos in'}
					</p>
					<p class="text-xs text-muted-foreground">{placeholder}</p>
				</div>
			</div>

			<Input
				id={name}
				type="file"
				class="sr-only"
				{name}
				accept="image/*"
				multiple={true}
				onchange={(e) => handleFileSelection(e.currentTarget.files)}
			/>
		</Label>
	</div>

	<!-- Gallery Grid -->
	{#if $file.length > 0 || images.length > 0}
		<div class="space-y-4">
			<div class="flex items-center justify-between">
				<h3 class="text-sm font-semibold tracking-tight">Gallery Preview</h3>
				{#if $file.length > 0}
					<Button
						variant="ghost"
						size="sm"
						class="h-8 text-xs text-muted-foreground hover:text-destructive"
						onclick={() => file.set(new DataTransfer().files)}
					>
						<BrushCleaning class="mr-2 h-3.5 w-3.5" /> Clear New
					</Button>
				{/if}
			</div>

			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				<!-- Existing Images (Server) -->
				{#each images as img, i}
					<div
						class="group relative aspect-square overflow-hidden rounded-lg border bg-muted"
						transition:fade
					>
						<img src="/files/{img}" class="h-full w-full object-cover" alt="Server asset" />
						<div
							class="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
						>
							<Button
								variant="destructive"
								size="icon"
								class="absolute top-1 right-1 h-7 w-7 rounded-full"
								onclick={() => removeExistingImage(i)}
							>
								<X class="h-4 w-4" />
							</Button>
						</div>
						<div class="absolute right-0 bottom-0 left-0 bg-background/80 p-1 text-center">
							<span class="text-[10px] font-medium text-muted-foreground uppercase">Existing</span>
						</div>
					</div>
				{/each}

				<!-- New Uploads (Compressed) -->
				{#each $file as f, i}
					<div
						class="group relative aspect-square overflow-hidden rounded-lg border bg-card shadow-sm"
						transition:fade
					>
						{#if f.type.startsWith('image/')}
							<img src={previewUrls[i]} class="h-full w-full object-cover" alt="Local preview" />
						{:else}
							<div class="flex h-full flex-col items-center justify-center gap-2 bg-muted/50">
								<ImageIcon class="h-8 w-8 text-muted-foreground" />
								<span class="max-w-full truncate px-2 text-[10px]">{f.name}</span>
							</div>
						{/if}

						<div
							class="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
						>
							<Button
								variant="destructive"
								size="icon"
								class="absolute top-1 right-1 h-7 w-7 rounded-full"
								onclick={() => removeNewFile(i)}
							>
								<X class="h-4 w-4" />
							</Button>
						</div>

						<div class="absolute right-0 bottom-0 left-0 bg-primary/90 p-1 text-center text-white">
							<span class="text-[10px] font-bold">{(f.size / 1024).toFixed(0)} KB</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
