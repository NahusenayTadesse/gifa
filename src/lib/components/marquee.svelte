<script lang="ts">
	/**
	 * An infinite scrolling ticker, like the neon signage strip above a lounge
	 * bar. The item list is rendered twice back to back and the track scrolls
	 * exactly -50%, so the loop seam is invisible.
	 */
	let {
		items,
		duration = 28,
		separator = '✦'
	}: {
		items: string[];
		/** Seconds for one full loop — lower is faster. */
		duration?: number;
		separator?: string;
	} = $props();
</script>

<div
	class="marquee-row overflow-hidden border-y border-primary/20 bg-primary/5 py-3"
	aria-hidden="true"
>
	<div class="marquee-track flex w-max items-center gap-8" style="--marquee-duration: {duration}s">
		{#each [0, 1] as copy (copy)}
			<div class="flex items-center gap-8 pr-8">
				{#each items as item (item + copy)}
					<span class="eyebrow flex items-center gap-8 whitespace-nowrap text-primary/90">
						{item}
						<span class="text-primary/40">{separator}</span>
					</span>
				{/each}
			</div>
		{/each}
	</div>
</div>
