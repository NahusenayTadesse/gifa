import { renderComponent } from '$lib/components/ui/data-table/index.js';
import DataTableLinks from '$lib/components/Table/data-table-links.svelte';
import Statuses from '$lib/components/Table/statuses.svelte';
import DataTableActions from './data-table-actions.svelte';
import DataTableSort from '$lib/components/Table/data-table-sort.svelte';

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
				link: '/dashboard/admin-panel/roles'
			});
		}
	},
	{
		accessorKey: 'status',
		header: ({ column }: any) =>
			renderComponent(DataTableSort, {
				name: 'Status',
				onclick: column.getToggleSortingHandler()
			}),
		sortable: true,
		cell: ({ row }: any) => {
			return renderComponent(Statuses, {
				status: row.original.status ? 'Active' : 'Inactive'
			});
		}
	},

	{
		accessorKey: 'userCount',
		header: ({ column }: any) =>
			renderComponent(DataTableSort, {
				name: 'User Count',
				onclick: column.getToggleSortingHandler()
			}),
		cell: (info: any) => {
			return info.getValue() ? info.getValue() + ' Users' : 'No Users for this Role';
		}
	}
];
