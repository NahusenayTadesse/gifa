<script lang="ts">
	import { Check, Copy } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';

	let { data = '' }: { data?: string | null } = $props();

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout>;

	async function copy() {
		if (!data) return;
		try {
			await navigator.clipboard.writeText(data);
			copied = true;
			clearTimeout(timer);
			timer = setTimeout(() => (copied = false), 1500);
		} catch {
			toast.error('Could not copy to the clipboard');
		}
	}
</script>

{#if data}
	<button
		type="button"
		onclick={copy}
		title="Copy {data}"
		class="group flex items-center gap-2 text-left text-sm normal-case transition-colors hover:text-primary"
	>
		<span class="break-all">{data}</span>
		{#if copied}
			<Check class="size-3.5 shrink-0 text-green-600" />
		{:else}
			<Copy class="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" />
		{/if}
	</button>
{:else}
	<span class="text-muted-foreground">—</span>
{/if}
