<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Hero } from '$lib/types';
	import { assetUrl } from '$lib/assets';

	let {
		hero,
		slideshow = [],
		size = 'md',
		scrollCue = false,
		children
	}: {
		hero: Hero;
		/** Extra background photos — when given, the hero crossfades through all of
		 * them (starting with `hero.image`) instead of sitting on one still frame. */
		slideshow?: { src: string; alt?: string | null }[];
		/** `lg` is the taller treatment used on the home page. */
		size?: 'md' | 'lg';
		/** Bouncing "scroll for more" affordance — reserve for the homepage hero. */
		scrollCue?: boolean;
		children?: Snippet;
	} = $props();

	// When a slideshow is supplied it fully replaces the single still frame —
	// curate `hero.image` itself as one of the `hero`-context gallery rows if
	// it should be part of the rotation, rather than doubling it up here.
	const slides = $derived(slideshow.length ? slideshow : [{ src: hero.image, alt: hero.imageAlt }]);

	let active = $state(0);

	const reduceMotion =
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	$effect(() => {
		if (slides.length <= 1 || reduceMotion) return;

		const id = setInterval(() => {
			active = (active + 1) % slides.length;
		}, 6000);

		return () => clearInterval(id);
	});
</script>

<section class="relative isolate overflow-hidden {size === 'lg' ? 'py-32 lg:py-44' : 'py-28 lg:py-36'}">
	<div class="absolute inset-0 -z-20 {reduceMotion ? '' : 'hero-pan'}">
		{#each slides as slide, i (slide.src + i)}
			<img
				src={assetUrl(slide.src)}
				alt={i === 0 ? (slide.alt ?? '') : ''}
				aria-hidden={i === 0 ? undefined : true}
				loading={i === 0 ? 'eager' : 'lazy'}
				class="absolute inset-0 h-full w-full object-cover transition-opacity duration-2200 ease-in-out {i ===
				active
					? 'opacity-100'
					: 'opacity-0'}"
			/>
		{/each}
	</div>
	<div
		class="enter-fade from-void/85 via-void/60 to-void/92 absolute inset-0 -z-10 bg-linear-to-b"
		style="--enter-duration: 1400ms"
	></div>
	<div class="spotlight -z-10" style="--spot-x: 22%; --spot-y: 30%"></div>
	<div class="spotlight -z-10" style="--spot-x: 82%; --spot-y: 75%; --spot-color: var(--burgundy-glow)"></div>
	<div class="container mx-auto px-4 text-center sm:px-6">
		{#if hero.eyebrow}
			<p class="eyebrow enter-down text-gold-light mb-8" style="--enter-delay: 150ms">
				{hero.eyebrow}
			</p>
		{/if}
		<h1
			class="enter-rise text-shimmer mx-auto max-w-4xl text-balance {size === 'lg'
				? 'text-5xl md:text-7xl'
				: 'text-4xl md:text-6xl'}"
			style="--enter-delay: 250ms"
		>
			{hero.title}
			{#if hero.titleAccent}<span class="font-sans text-gold-light block text-[0.6em] normal-case italic"
					>{hero.titleAccent}</span
				>{/if}
		</h1>
		{#if hero.tagline}
			<p
				class="enter-up mt-6 font-sans text-2xl text-champagne italic md:text-3xl"
				style="--enter-delay: 380ms"
			>
				{hero.tagline}
			</p>
		{/if}
		{#if hero.body}
			<p class="enter-up mx-auto mt-8 max-w-2xl text-lg text-white/80" style="--enter-delay: 520ms">
				{hero.body}
			</p>
		{/if}
		{@render children?.()}
	</div>

	{#if slides.length > 1}
		<div class="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center gap-2">
			{#each slides as slide, i (slide.src + i)}
				<span
					class="h-1.5 rounded-full transition-all duration-500 {i === active
						? 'w-6 bg-primary'
						: 'w-1.5 bg-white/40'}"
				></span>
			{/each}
		</div>
	{:else if scrollCue}
		<div
			class="enter-fade pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
			style="--enter-delay: 1400ms"
		>
			<span
				class="flex h-9 w-6 items-start justify-center rounded-full border border-white/35 p-1.5"
			>
				<span class="h-1.5 w-1 animate-scroll-cue rounded-full bg-primary"></span>
			</span>
		</div>
	{/if}
</section>
