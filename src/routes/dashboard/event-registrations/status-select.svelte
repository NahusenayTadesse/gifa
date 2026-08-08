<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';

	let { data, id, status }: { data: any; id: number; status: string } = $props();

	const items = [
		{ value: 'new', name: 'New' },
		{ value: 'confirmed', name: 'Confirmed' },
		{ value: 'cancelled', name: 'Cancelled' }
	];

	const { form, enhance, message, submit } = superForm(data, {
		resetForm: false,
		invalidateAll: true,
		id: `status-${id}`
	});

	$form.id = id;
	$form.status = status;

	$effect(() => {
		if ($message?.type === 'error') toast.error($message.text);
	});
</script>

<form method="post" action="?/status" use:enhance>
	<input type="hidden" name="id" bind:value={$form.id} />
	<Select.Root type="single" name="status" bind:value={$form.status} onValueChange={() => submit()}>
		<Select.Trigger class="w-36 capitalize">
			{items.find((i) => i.value === $form.status)?.name ?? 'Status'}
		</Select.Trigger>
		<Select.Content>
			{#each items as item}
				<Select.Item value={item.value}>{item.name}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</form>
