<script lang="ts">
	import CrudDialog, { type CrudField } from '$lib/components/Table/crud-dialog.svelte';
	import CrudDelete from '$lib/components/Table/crud-delete.svelte';
	import ReorderButtons from '$lib/components/Table/reorder-buttons.svelte';
	import FilterMenu from '$lib/components/Table/FilterMenu.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { assetUrl } from '$lib/assets';
	import { Star, Search } from '@lucide/svelte';

	let { data } = $props();

	const contextItems = [
		{ value: 'hero', name: 'Hero — homepage background slideshow' },
		{ value: 'food', name: 'Food' },
		{ value: 'drink', name: 'Drink' },
		{ value: 'interior', name: 'Interior / the room' },
		{ value: 'event', name: 'Event' },
		{ value: 'team', name: 'Team' }
	];

	const fields: CrudField[] = [
		{ name: 'src', label: 'Image', type: 'file', required: true },
		{ name: 'title', label: 'Title', type: 'text', placeholder: 'e.g. Bebi-Aynetu platter' },
		{ name: 'altText', label: 'Image description', type: 'text', required: true, placeholder: 'For screen readers' },
		{ name: 'caption', label: 'Caption', type: 'textarea', rows: 2 },
		{ name: 'place', label: 'Place', type: 'text', placeholder: 'e.g. The lounge' },
		{ name: 'context', label: 'Where it can show', type: 'select', required: true, items: contextItems },
		{ name: 'isFeatured', label: '', type: 'checkboxSingle', placeholder: 'Featured' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const editValues = (image: any) => ({
		id: image.id,
		title: image.title ?? '',
		altText: image.altText,
		caption: image.caption ?? '',
		place: image.place ?? '',
		context: image.context,
		isFeatured: image.isFeatured,
		sortOrder: image.sortOrder
	});

	let filteredRows: any[] = $state(data.rows);
	let search = $state('');

	const visibleRows: any[] = $derived(
		search.trim()
			? filteredRows.filter((image: any) => {
					const haystack = `${image.title ?? ''} ${image.caption ?? ''} ${image.place ?? ''} ${image.altText}`.toLowerCase();
					return haystack.includes(search.trim().toLowerCase());
				})
			: filteredRows
	);
</script>

<svelte:head>
	<title>Gallery | Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4 p-2">
	<div class="flex flex-wrap items-start justify-between gap-4">
		<div>
			<h1 class="font-heading text-2xl font-bold">Gallery</h1>
			<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
				The photo library used across the site — food, drink, the room and events. Tag an image
				'Hero' to add it to the crossfading slideshow behind the homepage headline. Hover a photo
				to reorder, edit or delete it.
			</p>
		</div>
		<CrudDialog title="Add Image" data={data.addForm} action="?/add" {fields} />
	</div>

	{#key data.rows}
		<div class="flex flex-wrap items-center gap-3">
			<div class="relative w-full max-w-xs">
				<Search class="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
				<Input bind:value={search} placeholder="Search title, caption, place…" class="pl-8" />
			</div>
			<FilterMenu data={data.rows} bind:filteredList={filteredRows} filterKeys={['context', 'isFeatured']} />
		</div>

		<p class="text-sm text-muted-foreground">
			{visibleRows.length} of {data.rows.length} photo{data.rows.length === 1 ? '' : 's'}
		</p>

		{#if visibleRows.length === 0}
			<p class="py-12 text-center text-sm text-muted-foreground">No photos match this search or filter.</p>
		{:else}
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{#each visibleRows as image (image.id)}
					{@const index = data.rows.findIndex((r: any) => r.id === image.id)}
					<div class="group relative overflow-hidden rounded-lg border border-border bg-muted">
						<div class="aspect-square w-full overflow-hidden">
							<img
								src={assetUrl(image.src)}
								alt={image.altText}
								loading="lazy"
								class="size-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>

						{#if image.isFeatured}
							<div
								class="absolute top-2 left-2 rounded-full bg-primary p-1 text-primary-foreground shadow"
								title="Featured"
							>
								<Star class="size-3.5 fill-current" />
							</div>
						{/if}

						<div
							class="absolute top-2 right-2 flex flex-col items-end gap-1 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100"
						>
							<div class="flex gap-0.5 rounded-md bg-background/95 p-0.5 shadow-sm">
								<ReorderButtons
									data={data.reorderForm}
									id={image.id}
									isFirst={index === 0}
									isLast={index === data.rows.length - 1}
								/>
							</div>
							<div class="flex gap-0.5 rounded-md bg-background/95 p-0.5 shadow-sm">
								<CrudDialog
									title="Edit Image"
									data={data.editForm}
									action="?/edit"
									{fields}
									values={editValues(image)}
									existing={{ src: image.src }}
									iconOnly
								/>
								<CrudDelete data={data.deleteForm} id={image.id} name={image.title || 'this image'} />
							</div>
						</div>

						<div
							class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-2.5 pt-8 pb-2"
						>
							<p class="truncate text-sm font-medium text-white">{image.title || '(untitled)'}</p>
							<div class="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/70">
								<Badge variant="secondary" class="px-1.5 py-0 text-[10px] capitalize">{image.context}</Badge>
								{#if image.place}
									<span class="truncate">{image.place}</span>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{/key}
</div>
