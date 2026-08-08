<script lang="ts">
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';

	const { text }: { text: string } = $props();

	const truncate = (value: string, max = 20) =>
		value.length > max ? value.slice(0, max) + '...' : value;
</script>

<div class="w-32">
	<Popover>
		<PopoverTrigger>{truncate(text || '—')}</PopoverTrigger>
		<PopoverContent class="max-w-sm p-3 text-sm wrap-break-word">{text}</PopoverContent>
	</Popover>
</div>
