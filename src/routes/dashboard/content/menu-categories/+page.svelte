<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import {
		column,
		deleteColumn,
		editColumn,
		indexColumn,
		longColumn,
		reorderColumn
	} from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

	let { data } = $props();

	const typeItems = [
		{ value: 'food', name: 'Food' },
		{ value: 'drink', name: 'Drink' }
	];

	const fields: CrudField[] = [
		{ name: 'name', label: 'Category name', type: 'text', required: true, placeholder: 'e.g. Lamb' },
		{ name: 'slug', label: 'Slug', type: 'text', required: true, placeholder: 'e.g. lamb' },
		{ name: 'type', label: 'Menu', type: 'select', required: true, items: typeItems },
		{ name: 'description', label: 'Description', type: 'textarea', rows: 2 },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		reorderColumn(data.rows, data.reorderForm),
		column('name', 'Name'),
		column('slug', 'Slug'),
		column('type', 'Menu'),
		longColumn('description', 'Description'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Category',
			keys: ['name', 'slug', 'type', 'description', 'sortOrder']
		}),
		deleteColumn(data.deleteForm, 'name')
	];
</script>

<ContentPage
	title="Menu Categories"
	description="Sections of the public menu page, e.g. Breakfast, Lamb, Cocktails. 'Menu' decides whether it renders under Food or Drinks. Use the arrows to set the order sections appear on the public menu."
	addTitle="Add Category"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
	filterKeys={['type']}
/>
