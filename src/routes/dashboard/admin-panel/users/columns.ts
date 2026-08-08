import { renderComponent } from '$lib/components/ui/data-table/index.js';
import DataTableLinks from '$lib/components/Table/data-table-links.svelte';
import Copy from '$lib/Copy.svelte';
import DataTableActions from './data-table-actions.svelte';
import DataTableSort from '$lib/components/Table/data-table-sort.svelte';
import { formatEthiopianDate } from '$lib/global.svelte';

export const columns = [
	{
		id: 'index',
		header: '#',
		cell: (info: any) => {
			const rowIndex = info.table.getRowModel().rows.findIndex((row: any) => row.id === info.row.id);
			return rowIndex + 1;
		},
		enableSorting: false
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
				link: '/dashboard/admin-panel/users'
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
		accessorKey: 'role',
		header: ({ column }: any) =>
			renderComponent(DataTableSort, {
				name: 'Role',
				onclick: column.getToggleSortingHandler()
			}),

		sortable: true,
		cell: ({ row }: any) => {
			// You can pass whatever you need from `row.original` to the component
			return renderComponent(DataTableLinks, {
				id: row.original.roleId,
				name: row.original.role,
				link: '/dashboard/admin-panel/roles'
			});
		}
	},
	// {
	// 	accessorKey: 'status',
	// 	header: ({ column }: any) =>
	// 		renderComponent(DataTableSort, {
	// 			name: 'Status',
	// 			onclick: column.getToggleSortingHandler()
	// 		}),
	// 	sortable: true,
	// 	cell: ({ row }: any) => {
	// 		const status = row.original.status;
	// 		return status ? 'Active' : 'Inactive';
	// 	}
	// },

	{
		accessorKey: 'permissionsCount',
		header: ({ column }: any) =>
			renderComponent(DataTableSort, {
				name: 'Permissions Count',
				onclick: column.getToggleSortingHandler()
			}),
		sortable: true,
		cell: (info: any) => `${info.getValue()} Permissions` // always “day”
	},

	{
		accessorKey: 'createdAt',
		header: ({ column }: any) =>
			renderComponent(DataTableSort, {
				name: 'Added At',
				onclick: column.getToggleSortingHandler()
			}),
		sortable: true,
		cell: (info: any) => formatEthiopianDate(new Date(info.getValue())) // always “day”
	},

	{
		accessorKey: 'actions',
		header: 'Actions',
		cell: ({ row }: any) => {
			// You can pass whatever you need from `row.original` to the component
			return renderComponent(DataTableActions, { id: row.original.id, name: row.original.name });
		}
	}
];
