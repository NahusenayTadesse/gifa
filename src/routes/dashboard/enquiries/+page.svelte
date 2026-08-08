<script lang="ts">
	import { renderComponent } from '$lib/components/ui/data-table/index.js';
	import DataTable from '$lib/components/Table/data-table.svelte';
	import DataTableSort from '$lib/components/Table/data-table-sort.svelte';
	import Statuses from '$lib/components/Table/statuses.svelte';
	import Copy from '$lib/Copy.svelte';
	import FilterMenu from '$lib/components/Table/FilterMenu.svelte';
	import StatusSelect from './status-select.svelte';
	import BigText from './bigText.svelte';
	import Read from './read.svelte';
	import Delete from './delete.svelte';

	let { data } = $props();

	const sortHeader = (name: string) => ({ column }: any) =>
		renderComponent(DataTableSort, { name, onclick: column.getToggleSortingHandler() });

	const columns = [
		{
			accessorKey: 'type',
			header: sortHeader('Type'),
			sortable: true,
			cell: ({ row }: any) => (row.original.type === 'private_hire' ? 'Private hire' : 'Contact')
		},
		{ accessorKey: 'name', header: sortHeader('Name'), sortable: true },
		{
			accessorKey: 'phone',
			header: sortHeader('Phone'),
			sortable: true,
			cell: ({ row }: any) => renderComponent(Copy, { data: row.original.phone ?? '' })
		},
		{
			accessorKey: 'email',
			header: sortHeader('Email'),
			sortable: true,
			cell: ({ row }: any) => renderComponent(Copy, { data: row.original.email ?? '' })
		},
		{
			accessorKey: 'message',
			header: 'Message',
			cell: ({ row }: any) => renderComponent(BigText, { text: row.original.message ?? '' })
		},
		{
			accessorKey: 'eventDate',
			header: sortHeader('Event date'),
			sortable: true,
			cell: ({ row }: any) => row.original.eventDate ?? '—'
		},
		{
			accessorKey: 'guests',
			header: sortHeader('Guests'),
			sortable: true,
			cell: ({ row }: any) => row.original.guests ?? '—'
		},
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
			accessorKey: 'seen',
			header: sortHeader('Seen'),
			sortable: true,
			cell: ({ row }: any) =>
				row.original.seen
					? renderComponent(Statuses, { status: 'Seen' })
					: renderComponent(Read, { data: data.seenForm, id: row.original.id })
		},
		{
			id: 'delete',
			header: 'Delete',
			enableSorting: false,
			cell: ({ row }: any) => renderComponent(Delete, { data: data.deleteForm, id: row.original.id })
		}
	];

	let filteredList = $derived(data.rows);
</script>

<svelte:head>
	<title>Enquiries | Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4 p-2">
	<div>
		<h1 class="font-heading text-2xl font-bold">Enquiries</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
			Contact-form messages and private-hire requests, in one inbox.
		</p>
	</div>

	{#key data.rows}
		<FilterMenu data={data.rows} bind:filteredList filterKeys={['type', 'status', 'seen']} />
		<DataTable {columns} data={filteredList} search={true} fileName="Enquiries" />
	{/key}
</div>
