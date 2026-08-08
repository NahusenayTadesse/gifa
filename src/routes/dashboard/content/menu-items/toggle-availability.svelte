<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { superForm } from 'sveltekit-superforms';
	import { CircleCheck, CircleX } from '@lucide/svelte';

	let { data, id, available }: { data: any; id: number; available: boolean } = $props();

	const { form, enhance } = superForm(data, {
		resetForm: false,
		invalidateAll: true,
		id: `avail-${id}`
	});

	$form.id = id;
	$form.isAvailable = !available;
</script>

<form method="post" action="?/toggleAvailability" use:enhance>
	<input type="hidden" name="id" bind:value={$form.id} />
	<input type="hidden" name="isAvailable" bind:value={$form.isAvailable} />
	<Button type="submit" size="sm" variant={available ? 'outline' : 'destructive'}>
		{#if available}
			<CircleCheck class="size-4" /> Available
		{:else}
			<CircleX class="size-4" /> 86'd
		{/if}
	</Button>
</form>
