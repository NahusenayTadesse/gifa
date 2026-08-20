<script lang="ts">
	import InputComp from '$lib/formComponents/InputComp.svelte';
	import GalleryUpload from '$lib/formComponents/GalleryUpload.svelte';
	import CrudDelete from '$lib/components/Table/crud-delete.svelte';
	import FilterMenu from '$lib/components/Table/FilterMenu.svelte';
	import Errors from '$lib/formComponents/Errors.svelte';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Save } from '@lucide/svelte';
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import { toastOnError } from '$lib/superform-defaults';
	import { assetUrl } from '$lib/assets';

	let { data } = $props();

	const eventItems = $derived(data.eventList.map((e: any) => ({ value: String(e.id), name: e.title })));

	const { form, errors, enhance, delayed, message, allErrors } = superForm(data.addForm, {
		resetForm: true,
		onError: toastOnError
	});

	$effect(() => {
		if (!$message) return;
		if ($message.type === 'error') toast.error($message.text);
		else toast.success($message.text);
	});

	let filteredRows: any[] = $state(data.rows);
</script>

<svelte:head>
	<title>Event Gallery | Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4 p-2">
	<div>
		<h1 class="font-heading text-2xl font-bold">Event Gallery</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
			Extra photos for one specific event, shown at the bottom of that event's page — separate
			from its poster image. Pick the event, drop in as many photos as you like, no titles or
			captions needed.
		</p>
	</div>

	<div class="max-w-xl rounded-lg border border-border bg-card p-4 sm:p-6">
		<form method="post" action="?/add" use:enhance enctype="multipart/form-data" class="flex flex-col gap-4">
			<Errors allErrors={$allErrors} />
			<InputComp
				label="Event"
				name="eventId"
				type="select"
				{form}
				{errors}
				required
				items={eventItems}
			/>
			<GalleryUpload {form} name="images" title="Photos" />
			<Button type="submit" class="mt-2 self-start">
				{#if $delayed}
					<LoadingBtn name="Saving" />
				{:else}
					<Save class="size-4" /> Add to Gallery
				{/if}
			</Button>
		</form>
	</div>

	{#if data.rows.length}
		{#key data.rows}
			<FilterMenu data={data.rows} bind:filteredList={filteredRows} filterKeys={['eventTitle']} />

			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{#each filteredRows as photo (photo.id)}
					<div class="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted">
						<img
							src={assetUrl(photo.imageUrl)}
							alt={photo.eventTitle ?? 'Event photo'}
							loading="lazy"
							class="size-full object-cover"
						/>
						<div class="absolute top-1 right-1 opacity-0 transition-opacity group-hover:opacity-100">
							<CrudDelete data={data.deleteForm} id={photo.id} name="this photo" />
						</div>
						<div class="absolute inset-x-0 bottom-0 bg-black/70 px-2 py-1">
							<Badge variant="secondary" class="max-w-full truncate px-1.5 py-0 text-[10px]">
								{photo.eventTitle ?? 'Unknown event'}
							</Badge>
						</div>
					</div>
				{/each}
			</div>
		{/key}
	{:else}
		<p class="py-8 text-center text-sm text-muted-foreground">No event photos yet.</p>
	{/if}
</div>
