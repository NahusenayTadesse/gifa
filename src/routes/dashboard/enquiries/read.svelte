<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import { CircleCheckBig } from '@lucide/svelte';

	let { data, id }: { data: any; id: number } = $props();

	const { form, enhance, delayed, message } = superForm(data, {
		resetForm: false,
		id: `seen-${id}`
	});

	$form.id = id;

	$effect(() => {
		if (!$message) return;
		if ($message.type === 'error') toast.error($message.text);
		else toast.success($message.text);
	});
</script>

<form method="post" action="?/seen" use:enhance>
	<input type="hidden" name="id" bind:value={$form.id} />
	<Button type="submit" size="sm" variant="outline">
		{#if $delayed}
			<LoadingBtn name="Marking" />
		{:else}
			<CircleCheckBig class="size-4" /> Mark seen
		{/if}
	</Button>
</form>
