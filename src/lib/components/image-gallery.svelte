<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { Expand } from '@lucide/svelte';
	import GalleryLightbox from './GalleryLightbox.svelte';
	import type { GalleryImage } from '$lib/types.js';
	import { assetUrl } from '$lib/assets';

	let {
		images,
		label = 'Image gallery',
		openOn = 'centered'
	}: {
		images: GalleryImage[];
		/** Accessible name for the carousel region. */
		label?: string;
		/** 'centered': a click centres the slide, a second click opens it. 'click': any click opens it. */
		openOn?: 'centered' | 'click';
	} = $props();

	let wrapperEl: HTMLDivElement | undefined = $state();
	let api = $state<CarouselAPI>();
	let selected = $state(0);
	let snapCount = $state(0);
	let loaded = $state<boolean[]>([]);

	let lightboxOpen = $state(false);
	let lightboxIndex = $state(0);

	const reduceMotion =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	/** Cards are read from the DOM so we never depend on Embla's internal engine. */
	let cards: HTMLElement[] = [];

	function collect() {
		cards = wrapperEl
			? Array.from(wrapperEl.querySelectorAll<HTMLElement>('[data-gallery-slide]'))
			: [];
	}

	/**
	 * Scales / fades slides by distance from the centre of the viewport.
	 * Measuring the slide's parent (the untransformed Carousel.Item) keeps this
	 * loop-safe: when Embla teleports a slide to the other end, the geometry is
	 * already correct, so there is no wrap-around glitch to special-case.
	 */
	function tween() {
		if (!wrapperEl || cards.length === 0) return;

		const view = wrapperEl.getBoundingClientRect();
		const center = view.left + view.width / 2;
		const half = view.width / 2;

		// Read every rect first, then write — one layout pass instead of N.
		const slots = cards.map((card) => card.parentElement!.getBoundingClientRect());

		slots.forEach((slot, i) => {
			const dist = Math.abs(slot.left + slot.width / 2 - center);
			const raw = Math.min(1, dist / (half + slot.width / 2));
			const t = raw * raw * (3 - 2 * raw); // smoothstep: flat near the centre, faster at the edges
			const el = cards[i];
			el.style.setProperty('--depth-scale', (1 - t * 0.14).toFixed(4));
			el.style.setProperty('--depth-opacity', (1 - t * 0.55).toFixed(4));
			el.style.setProperty('--depth-blur', `${(t * 2.5).toFixed(2)}px`);
		});
	}

	$effect(() => {
		images;
		if (!api) return;

		const sync = () => (selected = api!.selectedScrollSnap());
		const reset = () => {
			collect();
			snapCount = api!.scrollSnapList().length;
			sync();
			tween();
		};

		reset();
		api.on('select', sync).on('scroll', tween).on('slideFocus', tween).on('reInit', reset);

		return () => {
			api?.off('select', sync).off('scroll', tween).off('slideFocus', tween).off('reInit', reset);
		};
	});

	function onSlideClick(i: number) {
		if (openOn === 'click' || i === selected) {
			lightboxIndex = i;
			lightboxOpen = true;
		} else {
			api?.scrollTo(i);
		}
	}
</script>

<div bind:this={wrapperEl} class="relative">
	<Carousel.Root
		setApi={(embla) => (api = embla)}
		opts={{ loop: true, align: 'center', duration: reduceMotion ? 0 : 26 }}
		aria-label={label}
	>
		<Carousel.Content class="-ml-4 py-4 sm:-ml-6 sm:py-6">
			{#each images as image, i (image.src)}
				{@const active = i === selected}
				<Carousel.Item class="basis-[72%] pl-4 sm:basis-[46%] sm:pl-6 lg:basis-[34%]">
					<figure
						data-gallery-slide
						data-active={active}
						style="transform: scale(var(--depth-scale, 1)); opacity: var(--depth-opacity, 1); filter: blur(var(--depth-blur, 0px));"
						class="group relative aspect-4/5 overflow-hidden rounded-3xl border border-border bg-muted shadow-[0_2px_12px_-6px_rgb(0_0_0/0.4)] transition-[box-shadow] duration-500 will-change-[transform,opacity] data-[active=true]:shadow-[0_30px_60px_-28px_rgb(0_0_0/0.6)]"
					>
						<img
							src={assetUrl(image.src)}
							alt={image.alt}
							loading={i < 2 ? 'eager' : 'lazy'}
							decoding="async"
							draggable="false"
							onload={() => (loaded[i] = true)}
							class="pointer-events-none h-full w-full scale-[1.02] object-cover transition-[transform,opacity,filter] duration-[900ms] ease-out group-hover:scale-[1.09] {loaded[
								i
							]
								? 'opacity-100 blur-0'
								: 'opacity-0 blur-lg'}"
						/>

						<div
							class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-95 group-data-[active=true]:opacity-85"
						></div>
						<div
							class="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 ring-inset"
						></div>

						<!-- Only the centred slide advertises that it opens; the others read as "come here first". -->
						<div
							class="pointer-events-none absolute top-4 right-4 flex size-9 scale-90 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-data-[active=true]:opacity-100"
						>
							<Expand class="size-4" />
						</div>

						{#if image.caption}
							<figcaption
								class="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 text-[0.9375rem] leading-snug font-medium text-balance text-white opacity-0 transition-[transform,opacity] duration-500 ease-out group-data-[active=true]:translate-y-0 group-data-[active=true]:opacity-100"
							>
								{image.caption}
							</figcaption>
						{/if}

						<button
							type="button"
							onclick={() => onSlideClick(i)}
							aria-label={i === selected
								? `Open ${image.caption ?? image.alt} full screen`
								: `Show image ${i + 1} of ${images.length}`}
							aria-current={i === selected ? 'true' : undefined}
							class="absolute inset-0 rounded-3xl focus-visible:-outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary"
						></button>
					</figure>
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		{#if images.length > 1}
			<Carousel.Previous
				class="-left-1 size-11 border-border bg-background/80 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-x-0.5 hover:bg-background hover:text-primary hover:shadow-xl active:scale-95 sm:-left-5"
			/>
			<Carousel.Next
				class="-right-1 size-11 border-border bg-background/80 shadow-lg backdrop-blur-md transition duration-300 hover:translate-x-0.5 hover:bg-background hover:text-primary hover:shadow-xl active:scale-95 sm:-right-5"
			/>
		{/if}
	</Carousel.Root>

	{#if snapCount > 1}
		<div class="mt-4 flex items-center justify-center gap-4">
			<div class="flex items-center gap-2">
				{#each Array.from({ length: snapCount }, (_, i) => i) as i (i)}
					<button
						type="button"
						aria-label="Show image {i + 1}"
						aria-current={i === selected ? 'true' : undefined}
						onclick={() => api?.scrollTo(i)}
						class="h-1.5 rounded-full transition-all duration-500 ease-out {i === selected
							? 'w-7 bg-primary'
							: 'w-1.5 bg-border hover:w-3 hover:bg-primary/60'}"
					></button>
				{/each}
			</div>
			<span class="h-3.5 w-px bg-border"></span>
			<span class="text-xs font-medium tabular-nums text-muted-foreground">
				{selected + 1} / {images.length}
			</span>
		</div>
	{/if}
</div>

<GalleryLightbox
	{images}
	bind:open={lightboxOpen}
	bind:index={lightboxIndex}
	onclose={(i) => api?.scrollTo(i, true)}
/>