<script lang="ts">
	/** Renders a record's fields as a simple label/value detail table. */
	let {
		singleTable = []
	}: { singleTable?: { name: string; value: unknown }[] } = $props();
</script>

<div class="overflow-x-auto rounded-lg border border-border">
	<table class="w-full text-left text-sm">
		<tbody>
			{#each singleTable as row (row.name)}
				<tr class="border-b border-border last:border-0">
					<th class="w-48 bg-muted/40 px-4 py-3 font-medium text-muted-foreground">{row.name}</th>
					<td class="px-4 py-3">
						{#if row.value === null || row.value === undefined || row.value === ''}
							<span class="text-muted-foreground">—</span>
						{:else}
							{row.value}
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
