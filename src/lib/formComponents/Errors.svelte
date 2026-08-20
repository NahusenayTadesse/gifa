<script>
	let { allErrors } = $props();
	import { CircleAlert } from '@lucide/svelte';
</script>

{#if allErrors.length}
	<div
		role="alert"
		aria-live="assertive"
		class="mb-4 rounded-lg bg-destructive/15 p-3 text-destructive"
	>
		<div class="flex items-center justify-between">
			<strong class="text-sm font-semibold">Please fix the following</strong>
		</div>

		<ul class="mt-2 ml-4 list-inside list-disc space-y-1 text-sm">
			{#each allErrors as error}
				<li class="flex items-center gap-2"><CircleAlert /> {error.messages}</li>
			{/each}
		</ul>
	</div>
{/if}
