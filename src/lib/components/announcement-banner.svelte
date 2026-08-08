<script lang="ts">
	let {
		announcements = []
	}: {
		announcements: { id: number; message: string; level: string }[];
	} = $props();

	const levelClass: Record<string, string> = {
		info: 'bg-primary text-primary-foreground',
		notice: 'bg-secondary text-secondary-foreground',
		warning: 'bg-destructive text-destructive-foreground'
	};
</script>

{#each announcements as announcement (announcement.id)}
	<div class="{levelClass[announcement.level] ?? levelClass.info} px-4 py-2 text-center text-sm">
		{announcement.message}
	</div>
{/each}
