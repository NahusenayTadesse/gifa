import { renderComponent } from '$lib/components/ui/data-table/index.js';
import DataTableSort from '$lib/components/Table/data-table-sort.svelte';
import DataTableLinks from '$lib/components/Table/data-table-links.svelte';
export const columns = [
	{
		accessorKey: 'index',
		header: '#',
		cell: (info: any) => info.row.index + 1,
		sortable: false
	},

	{
		accessorKey: 'name',
		header: ({ column }: any) =>
			renderComponent(DataTableSort, {
				name: 'Name',
				onclick: column.getToggleSortingHandler()
			}),
		sortable: true
	},

	{
		accessorKey: 'description',
		header: 'Description'
	}
];

export const userColumns = [
	{
		accessorKey: 'index',
		header: '#',
		cell: (info: any) => info.row.index + 1,
		sortable: false
	},

	{
		accessorKey: 'name',
		header: ({ column }: any) =>
			renderComponent(DataTableSort, {
				name: 'Name',
				onclick: column.getToggleSortingHandler()
			}),
		sortable: true,
		cell: ({ row }: any) => {
			// You can pass whatever you need from `row.original` to the component
			return renderComponent(DataTableLinks, {
				id: row.original.id,
				name: row.original.name,
				link: '/dashboard/users'
			});
		}
	},

	{
		accessorKey: 'email',
		header: ({ column }: any) =>
			renderComponent(DataTableSort, {
				name: 'Email',
				onclick: column.getToggleSortingHandler()
			}),
		sortable: true
	},

	{
		accessorKey: 'isActive',
		header: ({ column }: any) =>
			renderComponent(DataTableSort, {
				name: 'Active',
				onclick: column.getToggleSortingHandler()
			}),
		sortable: true
	}
];
