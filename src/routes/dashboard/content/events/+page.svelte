<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import {
		column,
		deleteColumn,
		editColumn,
		imageColumn,
		indexColumn,
		longColumn
	} from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

	let { data } = $props();

	const fields: CrudField[] = [
		{ name: 'title', label: 'Title', type: 'text', required: true },
		{ name: 'slug', label: 'Slug', type: 'text', required: true, placeholder: 'e.g. new-year-2026' },
		{ name: 'description', label: 'Description', type: 'textarea', rows: 3 },
		{ name: 'eventType', label: 'Type', type: 'text', placeholder: 'live music, DJ night, coffee ceremony…' },
		{ name: 'startsAt', label: 'Starts', type: 'datetime-local', required: true },
		{ name: 'endsAt', label: 'Ends', type: 'datetime-local' },
		{ name: 'posterImage', label: 'Poster', type: 'file' },
		{ name: 'isPrivateHireExample', label: '', type: 'checkboxSingle', placeholder: 'Show as a private-hire example once past' },
		{ name: 'ticketUrl', label: 'Ticket / RSVP link', type: 'text' },
		{ name: 'bookingNote', label: 'Booking note', type: 'textarea', rows: 2 },
		{ name: 'isPublished', label: '', type: 'checkboxSingle', placeholder: 'Published' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		imageColumn('posterImage', 'Poster'),
		column('title', 'Title'),
		column('eventType', 'Type'),
		column('startsAt', 'Starts'),
		longColumn('description', 'Description'),
		column('isPublished', 'Published'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Event',
			keys: [
				'title',
				'slug',
				'description',
				'eventType',
				'startsAt',
				'endsAt',
				'isPrivateHireExample',
				'ticketUrl',
				'bookingNote',
				'isPublished',
				'sortOrder'
			],
			fileKeys: ['posterImage']
		}),
		deleteColumn(data.deleteForm, 'title')
	];
</script>

<ContentPage
	title="Events"
	description="Live music, DJ nights and coffee ceremonies. Upcoming ones market the lounge; past ones flagged as private-hire examples sell it."
	addTitle="Add Event"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
