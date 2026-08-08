<script lang="ts">
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	import { StickyNote } from '@lucide/svelte';

	const { notes, staffNotes }: { notes?: string | null; staffNotes?: string | null } = $props();
	const hasNotes = Boolean(notes || staffNotes);
</script>

{#if hasNotes}
	<Popover>
		<PopoverTrigger>
			<StickyNote class="size-4 text-primary" />
		</PopoverTrigger>
		<PopoverContent class="max-w-sm space-y-2 p-3 text-sm wrap-break-word">
			{#if notes}
				<p><span class="font-medium">Customer:</span> {notes}</p>
			{/if}
			{#if staffNotes}
				<p><span class="font-medium">Staff:</span> {staffNotes}</p>
			{/if}
		</PopoverContent>
	</Popover>
{:else}
	<span class="text-muted-foreground">—</span>
{/if}
