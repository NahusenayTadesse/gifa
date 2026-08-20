<script lang="ts">
	import DataTable from '$lib/components/Table/data-table.svelte';
	import CrudDialog, { type CrudField } from '$lib/components/Table/crud-dialog.svelte';
	import FilterMenu from '$lib/components/Table/FilterMenu.svelte';

	let {
		title,
		description,
		addTitle,
		addForm,
		fields,
		columns,
		rows,
		/** Row keys to build "filter by" dropdowns for, e.g. ['context', 'isFeatured']. */
		filterKeys
	}: {
		title: string;
		/** One line telling the admin where this content shows up on the site. */
		description: string;
		addTitle: string;
		addForm: any;
		fields: CrudField[];
		columns: any[];
		rows: any[];
		filterKeys?: string[];
	} = $props();

	let filteredRows = $state(rows);
</script>

<svelte:head>
	<title>{title} | Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4 p-2">
	<div class="flex flex-wrap items-start justify-between gap-4">
		<div>
			<h1 class="font-heading text-2xl font-bold">{title}</h1>
			<p class="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>
		</div>
		<CrudDialog title={addTitle} data={addForm} action="?/add" {fields} />
	</div>

	{#key rows}
		{#if filterKeys?.length}
			<FilterMenu data={rows} bind:filteredList={filteredRows} {filterKeys} />
		{/if}
		<DataTable {columns} data={filterKeys?.length ? filteredRows : rows} search={true} fileName={title} />
	{/key}
</div>
