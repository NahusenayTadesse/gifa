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

	const pageItems = [
		'home',
		'menu',
		'gallery',
		'about',
		'book',
		'private-hire',
		'contact'
	].map((value) => ({ value, name: value }));

	const fields: CrudField[] = [
		{ name: 'page', label: 'Page', type: 'select', required: true, items: pageItems },
		{ name: 'title', label: 'Headline', type: 'text', required: true },
		{ name: 'titleAccent', label: 'Headline accent', type: 'text', placeholder: 'Shown after the headline in the brand colour' },
		{ name: 'eyebrow', label: 'Eyebrow', type: 'text', placeholder: 'Small label above the headline' },
		{ name: 'tagline', label: 'Tagline', type: 'text' },
		{ name: 'body', label: 'Body text', type: 'textarea', rows: 4 },
		{ name: 'image', label: 'Background image', type: 'file' },
		{ name: 'imageAlt', label: 'Image description', type: 'text', placeholder: 'For screen readers' }
	];

	const columns = [
		indexColumn,
		column('page', 'Page'),
		column('title', 'Headline'),
		longColumn('tagline', 'Tagline'),
		imageColumn('image', 'Image'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Page Banner',
			keys: ['page', 'title', 'titleAccent', 'eyebrow', 'tagline', 'body', 'imageAlt'],
			fileKeys: ['image']
		}),
		deleteColumn(data.deleteForm, 'page')
	];
</script>

<ContentPage
	title="Page Banners"
	description="The hero image and headline at the top of each public page. One row per page."
	addTitle="Add Page Banner"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
