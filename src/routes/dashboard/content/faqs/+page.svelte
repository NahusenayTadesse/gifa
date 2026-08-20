<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import {
		column,
		deleteColumn,
		editColumn,
		indexColumn,
		longColumn,
		reorderColumn
	} from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

	let { data } = $props();

	const faqPages = [
		{ value: 'menu', name: 'Menu page' },
		{ value: 'home', name: 'Home page' },
		{ value: 'book', name: 'Book a table page' },
		{ value: 'private-hire', name: 'Private hire page' }
	];

	const fields: CrudField[] = [
		{ name: 'page', label: 'Page', type: 'select', required: true, items: faqPages },
		{ name: 'question', label: 'Question', type: 'text', required: true },
		{ name: 'answer', label: 'Answer', type: 'textarea', required: true, rows: 5 },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		reorderColumn(data.rows, data.reorderForm),
		column('page', 'Page'),
		longColumn('question', 'Question'),
		longColumn('answer', 'Answer'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit FAQ',
			keys: ['page', 'question', 'answer', 'sortOrder']
		}),
		deleteColumn(data.deleteForm, 'question')
	];
</script>

<ContentPage
	title="FAQs"
	description="The accordion sections on the Home, Menu, Book and Private Hire pages. Each question belongs to one page."
	addTitle="Add FAQ"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
	filterKeys={['page']}
/>
