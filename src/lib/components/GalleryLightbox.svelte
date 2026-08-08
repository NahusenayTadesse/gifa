<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { assetUrl } from '$lib/assets';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { X } from '@lucide/svelte';
	import { untrack } from 'svelte';
	import type { GalleryImage } from '$lib/types.js';

	let {
		images,
		open = $bindable(false),
		index = $bindable(0),
		onclose
	}: {
		images: GalleryImage[];
		open?: boolean;
		/** Two-way bound so the gallery behind can follow along. */
		index?: number;
		onclose?: (index: number) => void;
	} = $props();

	let api = $state<CarouselAPI>();
	let loaded = $state<boolean[]>([]);

	const reduceMotion =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	$effect(() => {
		if (!api) return;

		// The dialog mounts fresh on every open, so jump to the clicked image once.
		// `index` is read untracked, otherwise every selection would re-run this.
		api.scrollTo(untrack(() => index), true);

		const sync = () => (index = api!.selectedScrollSnap());
		api.on('select', sync);
		return () => void api?.off('select', sync);
	});

	function onOpenChange(next: boolean) {
		if (!next) onclose?.(index);
	}

	function onKeyDown(e: KeyboardEvent) {
		if (!open) return;
		if (e.key === 'ArrowRight') api?.scrollNext();
		if (e.key === 'ArrowLeft') api?.scrollPrev();
	}

	/** Only the current image and its neighbours are worth fetching eagerly. */
	const eager = (i: number) =>
		Math.min(Math.abs(i - index), images.length - Math.abs(i - index)) <= 1;
</script>

<svelte:window onkeydown={onKeyDown} />

<Dialog.Root bind:open {onOpenChange}>
	<Dialog.Portal>
		<Dialog.Overlay
			class="fixed inset-0 z-50 bg-black/92 backdrop-blur-md data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
		/>
		<Dialog.Content
			class="fixed inset-0 z-50 flex flex-col outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
		>
			<Dialog.Title class="sr-only">
				{images[index]?.caption ?? images[index]?.alt ?? 'Image viewer'}
			</Dialog.Title>
			<Dialog.Description class="sr-only">
				Image {index + 1} of {images.length}. Use the arrow keys to move between images, Escape to
				close.
			</Dialog.Description>

			<header class="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-6">
				<span class="text-sm font-medium tabular-nums text-white/60">
					{index + 1} / {images.length}
				</span>
				<Dialog.Close
					class="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition duration-300 hover:rotate-90 hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					aria-label="Close image viewer"
				>
					<X class="size-5" />
				</Dialog.Close>
			</header>

			<Carousel.Root
				setApi={(embla) => (api = embla)}
				opts={{ loop: true, duration: reduceMotion ? 0 : 22 }}
				aria-label="Full screen image viewer"
				class="min-h-0 flex-1"
			>
				<Carousel.Content class="ml-0">
					{#each images as image, i (image.src)}
						<Carousel.Item class="basis-full pl-0">
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<div
								onclick={(e) => {
									if (e.target === e.currentTarget) open = false;
								}}
								class="flex h-[calc(100dvh-11rem)] items-center justify-center px-5 sm:px-16"
							>
								<img
									src={assetUrl(image.full ?? image.src)}
									alt={image.alt}
									loading={eager(i) ? 'eager' : 'lazy'}
									decoding="async"
									draggable="false"
									onload={() => (loaded[i] = true)}
									class="max-h-full max-w-full rounded-xl object-contain shadow-2xl transition-opacity duration-500 {loaded[
										i
									]
										? 'opacity-100'
										: 'opacity-0'}"
								/>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>

				{#if images.length > 1}
					<Carousel.Previous
						class="left-2 size-12 border-white/15 bg-white/5 text-white backdrop-blur-md transition duration-300 hover:-translate-x-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 sm:left-6"
					/>
					<Carousel.Next
						class="right-2 size-12 border-white/15 bg-white/5 text-white backdrop-blur-md transition duration-300 hover:translate-x-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 sm:right-6"
					/>
				{/if}
			</Carousel.Root>

			<footer class="px-5 pb-8 text-center sm:px-8">
				{#if images[index]?.caption}
					<p class="mx-auto max-w-2xl text-sm leading-relaxed text-balance text-white/75">
						{images[index].caption}
					</p>
				{/if}
			</footer>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>