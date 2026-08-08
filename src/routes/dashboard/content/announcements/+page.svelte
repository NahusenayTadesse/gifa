<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import { column, deleteColumn, editColumn, indexColumn } from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

	let { data } = $props();

	const levelItems = [
		{ value: 'info', name: 'Info' },
		{ value: 'notice', name: 'Notice' },
		{ value: 'warning', name: 'Warning' }
	];

	const fields: CrudField[] = [
		{ name: 'message', label: 'Message', type: 'text', required: true, placeholder: 'e.g. Closed for Eid, back Thursday' },
		{ name: 'level', label: 'Level', type: 'select', required: true, items: levelItems },
		{ name: 'startsAt', label: 'Starts showing', type: 'datetime-local' },
		{ name: 'endsAt', label: 'Stops showing', type: 'datetime-local' },
		{ name: 'isActive', label: '', type: 'checkboxSingle', placeholder: 'Active' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('message', 'Message'),
		column('level', 'Level'),
		column('startsAt', 'Starts'),
		column('endsAt', 'Ends'),
		column('isActive', 'Active'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Announcement',
			keys: ['message', 'level', 'startsAt', 'endsAt', 'isActive', 'sortOrder']
		}),
		deleteColumn(data.deleteForm, 'message')
	];
</script>

<ContentPage
	title="Announcements"
	description="The sitewide banner — Eid hours, private-event closures, 'kitchen closed, bar open'."
	addTitle="Add Announcement"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
