<script lang="ts">
	import { renderComponent } from '$lib/components/ui/data-table/index.js';
	import DataTable from '$lib/components/Table/data-table.svelte';
	import DataTableSort from '$lib/components/Table/data-table-sort.svelte';
	import Copy from '$lib/Copy.svelte';
	import StatusSelect from './status-select.svelte';
	import Delete from './delete.svelte';

	let { data } = $props();

	const sortHeader = (name: string) => ({ column }: any) =>
		renderComponent(DataTableSort, { name, onclick: column.getToggleSortingHandler() });

	const columns = [
		{ accessorKey: 'eventTitle', header: sortHeader('Event'), sortable: true },
		{
			accessorKey: 'eventStartsAt',
			header: sortHeader('Event date'),
			sortable: true,
			cell: ({ row }: any) =>
				row.original.eventStartsAt
					? new Date(row.original.eventStartsAt).toLocaleString('en-GB', {
							day: 'numeric',
							month: 'short',
							hour: 'numeric',
							minute: '2-digit'
						})
					: '—'
		},
		{ accessorKey: 'name', header: sortHeader('Name'), sortable: true },
		{
			accessorKey: 'email',
			header: sortHeader('Email'),
			sortable: true,
			cell: ({ row }: any) => renderComponent(Copy, { data: row.original.email })
		},
		{
			accessorKey: 'phone',
			header: sortHeader('Phone'),
			sortable: true,
			cell: ({ row }: any) => (row.original.phone ? renderComponent(Copy, { data: row.original.phone }) : '—')
		},
		{ accessorKey: 'guests', header: sortHeader('Guests'), sortable: true },
		{ accessorKey: 'notes', header: 'Notes', enableSorting: false },
		{
			id: 'status',
			header: 'Status',
			enableSorting: false,
			cell: ({ row }: any) =>
				renderComponent(StatusSelect, {
					data: data.statusForm,
					id: row.original.id,
					status: row.original.status
				})
		},
		{
			id: 'delete',
			header: 'Delete',
			enableSorting: false,
			cell: ({ row }: any) => renderComponent(Delete, { data: data.deleteForm, id: row.original.id })
		}
	];
</script>

<svelte:head>
	<title>Event Registrations | Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4 p-2">
	<div>
		<h1 class="font-heading text-2xl font-bold">Event Registrations</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
			Guests who registered for an upcoming event from the public events page.
		</p>
	</div>

	<DataTable {columns} data={data.rows} search={true} fileName="Event Registrations" />
</div>
