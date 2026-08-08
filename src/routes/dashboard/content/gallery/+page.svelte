<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import {
		column,
		deleteColumn,
		editColumn,
		imageColumn,
		indexColumn,
		longColumn
	} from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

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

	const columns = [
		indexColumn,
		imageColumn('src', 'Image'),
		column('title', 'Title'),
		column('context', 'Context'),
		column('place', 'Place'),
		longColumn('caption', 'Caption'),
		column('isFeatured', 'Featured'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Image',
			keys: ['title', 'altText', 'caption', 'place', 'context', 'isFeatured', 'sortOrder'],
			fileKeys: ['src']
		}),
		deleteColumn(data.deleteForm, 'title')
	];
</script>

<ContentPage
	title="Gallery"
	description="The photo library used across the site — food, drink, the room and events. Tag an image 'Hero' to add it to the crossfading slideshow behind the homepage headline; Display order sets the rotation order."
	addTitle="Add Image"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
