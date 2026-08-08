<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import { renderComponent } from '$lib/components/ui/data-table/index.js';
	import { column, deleteColumn, indexColumn, longColumn } from '$lib/dashboard/columns';
	import CrudDialog, { type CrudField } from '$lib/components/Table/crud-dialog.svelte';
	import ToggleAvailability from './toggle-availability.svelte';

	let { data } = $props();

	const categoryItems = $derived(
		data.categories.map((c: any) => ({ value: String(c.id), name: c.name }))
	);

	const fields: CrudField[] = $derived([
		{ name: 'categoryId', label: 'Category', type: 'select', required: true, items: categoryItems },
		{ name: 'name', label: 'Dish name', type: 'text', required: true },
		{ name: 'description', label: 'Description', type: 'textarea', rows: 3 },
		{ name: 'price', label: 'Price (£)', type: 'number', required: true, placeholder: 'e.g. 15.99' },
		{ name: 'image', label: 'Photo', type: 'file' },
		{ name: 'isVegan', label: '', type: 'checkboxSingle', placeholder: 'Vegan' },
		{ name: 'isVegetarian', label: '', type: 'checkboxSingle', placeholder: 'Vegetarian' },
		{ name: 'isSpicy', label: '', type: 'checkboxSingle', placeholder: 'Spicy' },
		{
			name: 'allergens',
			label: 'Allergens',
			type: 'textarea',
			rows: 3,
			placeholder: 'One per line, e.g. gluten'
		},
		{ name: 'isAvailable', label: '', type: 'checkboxSingle', placeholder: 'Available' },
		{ name: 'isSignature', label: '', type: 'checkboxSingle', placeholder: 'Signature dish (max 3, homepage)' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	]);

	const categoryName = (id: number) => data.categories.find((c: any) => c.id === id)?.name ?? '—';

	const priceColumn = {
		accessorKey: 'price',
		header: 'Price',
		cell: ({ row }: any) => `£${(row.original.price / 100).toFixed(2)}`
	};

	const categoryColumn = {
		accessorKey: 'categoryId',
		header: 'Category',
		cell: ({ row }: any) => categoryName(row.original.categoryId)
	};

	const availabilityColumn = {
		id: 'available',
		header: 'Available',
		enableSorting: false,
		cell: ({ row }: any) =>
			renderComponent(ToggleAvailability, {
				data: data.toggleForm,
				id: row.original.id,
				available: row.original.isAvailable
			})
	};

	const editPriceColumn = $derived({
		id: 'edit',
		header: 'Edit',
		enableSorting: false,
		cell: ({ row }: any) => {
			const r = row.original;
			return renderComponent(CrudDialog, {
				title: 'Edit Dish',
				data: data.editForm,
				action: '?/edit',
				fields: fields,
				values: {
					id: r.id,
					categoryId: String(r.categoryId),
					name: r.name,
					description: r.description ?? '',
					price: (r.price / 100).toFixed(2),
					isVegan: r.isVegan,
					isVegetarian: r.isVegetarian,
					isSpicy: r.isSpicy,
					allergens: (r.allergens ?? []).join('\n'),
					isAvailable: r.isAvailable,
					isSignature: r.isSignature,
					sortOrder: r.sortOrder
				},
				existing: { image: r.image ?? '' },
				iconOnly: true
			});
		}
	});

	const columns = $derived([
		indexColumn,
		categoryColumn,
		column('name', 'Name'),
		priceColumn,
		longColumn('description', 'Description'),
		availabilityColumn,
		column('isSignature', 'Signature'),
		column('sortOrder', 'Order'),
		editPriceColumn,
		deleteColumn(data.deleteForm, 'name')
	]);
</script>

<ContentPage
	title="Menu Items"
	description="The full food and drinks menu. Toggle Available to 86 a dish for the night without deleting it."
	addTitle="Add Dish"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
