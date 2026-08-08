<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	/** Page shell for a single-record detail view. */
	let {
		title,
		description = '',
		children
	}: { title: string; description?: string; children?: Snippet } = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Card.Root class="w-full">
	<Card.Header>
		<Card.Title class="text-2xl">{title}</Card.Title>
		{#if description}
			<Card.Description>{description}</Card.Description>
		{/if}
	</Card.Header>
	<Card.Content class="flex w-full flex-col gap-4 p-0">
		{@render children?.()}
	</Card.Content>
</Card.Root>
