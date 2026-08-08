<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let {
		title,
		subtitle,
		eyebrow,
		align = 'center',
		rule = false
	}: {
		title: string;
		subtitle?: string | null;
		/** Small flanked label shown above the title, e.g. "The Kitchen". */
		eyebrow?: string | null;
		align?: 'center' | 'start';
		/** The short accent rule used under the two-column section headings. */
		rule?: boolean;
	} = $props();
</script>

<div class={align === 'center' ? 'mx-auto max-w-2xl text-center' : ''}>
	{#if eyebrow}
		<p use:reveal class="eyebrow {align === 'center' ? '' : 'eyebrow-left'} mb-6">{eyebrow}</p>
	{/if}
	<h2 use:reveal={{ delay: eyebrow ? 80 : 0 }} class="text-3xl md:text-4xl">{title}</h2>
	{#if rule}
		<div use:reveal={{ delay: 120, y: 0 }} class="reveal-rule mt-4 h-px w-16 bg-primary"></div>
	{/if}
	{#if subtitle}
		<p
			use:reveal={{ delay: 120 }}
			class="text-champagne mt-4 font-sans text-lg italic opacity-90 md:text-xl"
		>
			{subtitle}
		</p>
	{/if}
</div>
