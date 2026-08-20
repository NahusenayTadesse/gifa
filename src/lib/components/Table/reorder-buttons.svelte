<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { ChevronUp, ChevronDown } from '@lucide/svelte';
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import { toastOnError } from '$lib/superform-defaults';

	let {
		data,
		id,
		/** True for the first row on screen — nothing above it to swap with. */
		isFirst = false,
		/** True for the last row on screen — nothing below it to swap with. */
		isLast = false
	}: { data: any; id: number; isFirst?: boolean; isLast?: boolean } = $props();

	const { enhance, message } = superForm(data, {
		resetForm: false,
		invalidateAll: true,
		id: `reorder-${id}`,
		onError: toastOnError
	});

	$effect(() => {
		if ($message?.type === 'error') toast.error($message.text);
	});
</script>

<form method="post" action="?/reorder" use:enhance class="flex gap-0.5">
	<input type="hidden" name="id" value={id} />
	<Button
		type="submit"
		name="direction"
		value="up"
		size="icon"
		variant="ghost"
		class="size-7"
		disabled={isFirst}
		title="Move up"
	>
		<ChevronUp class="size-4" />
	</Button>
	<Button
		type="submit"
		name="direction"
		value="down"
		size="icon"
		variant="ghost"
		class="size-7"
		disabled={isLast}
		title="Move down"
	>
		<ChevronDown class="size-4" />
	</Button>
</form>
