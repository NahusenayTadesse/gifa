<script lang="ts">
	import { renderComponent } from '$lib/components/ui/data-table/index.js';
	import DataTable from '$lib/components/Table/data-table.svelte';
	import DataTableSort from '$lib/components/Table/data-table-sort.svelte';
	import Copy from '$lib/Copy.svelte';
	import StatusSelect from './status-select.svelte';
	import Notes from './notes.svelte';
	import Delete from './delete.svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data } = $props();

	const sortHeader = (name: string) => ({ column }: any) =>
		renderComponent(DataTableSort, { name, onclick: column.getToggleSortingHandler() });

	const columns = [
		{ accessorKey: 'bookingDate', header: sortHeader('Date'), sortable: true },
		{ accessorKey: 'bookingTime', header: sortHeader('Time'), sortable: true },
		{ accessorKey: 'reference', header: sortHeader('Ref'), sortable: true },
		{ accessorKey: 'name', header: sortHeader('Name'), sortable: true },
		{
			accessorKey: 'phone',
			header: sortHeader('Phone'),
			sortable: true,
			cell: ({ row }: any) => renderComponent(Copy, { data: row.original.phone })
		},
		{ accessorKey: 'partySize', header: sortHeader('Party'), sortable: true },
		{ accessorKey: 'occasion', header: sortHeader('Occasion'), sortable: true },
		{
			id: 'notes',
			header: 'Notes',
			enableSorting: false,
			cell: ({ row }: any) =>
				renderComponent(Notes, { notes: row.original.notes, staffNotes: row.original.staffNotes })
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
			id: 'delete',
			header: 'Delete',
			enableSorting: false,
			cell: ({ row }: any) => renderComponent(Delete, { data: data.deleteForm, id: row.original.id })
		}
	];

	type Filter = 'today' | 'tomorrow' | 'week' | 'all';
	let filter = $state<Filter>('today');

	const toDateStr = (d: Date) => d.toISOString().slice(0, 10);
	const today = new Date();
	const todayStr = toDateStr(today);
	const tomorrowStr = toDateStr(new Date(today.getTime() + 86400000));
	const weekAheadStr = toDateStr(new Date(today.getTime() + 7 * 86400000));

	const filteredRows = $derived(
		data.rows.filter((row: any) => {
			const d = String(row.bookingDate).slice(0, 10);
			if (filter === 'today') return d === todayStr;
			if (filter === 'tomorrow') return d === tomorrowStr;
			if (filter === 'week') return d >= todayStr && d <= weekAheadStr;
			return true;
		})
	);
</script>

<svelte:head>
	<title>Bookings | Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4 p-2">
	<div>
		<h1 class="font-heading text-2xl font-bold">Bookings</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
			Requests from the "Book a table" form. Bookings are confirmed by phone, not automatically —
			update the status once you've called the guest.
		</p>
	</div>

	<div class="flex flex-wrap gap-2">
		<Button size="sm" variant={filter === 'today' ? 'default' : 'outline'} onclick={() => (filter = 'today')}>Today</Button>
		<Button size="sm" variant={filter === 'tomorrow' ? 'default' : 'outline'} onclick={() => (filter = 'tomorrow')}>Tomorrow</Button>
		<Button size="sm" variant={filter === 'week' ? 'default' : 'outline'} onclick={() => (filter = 'week')}>This week</Button>
		<Button size="sm" variant={filter === 'all' ? 'default' : 'outline'} onclick={() => (filter = 'all')}>All</Button>
	</div>

	{#key filteredRows}
		<DataTable {columns} data={filteredRows} search={true} fileName="Bookings" />
	{/key}
</div>
