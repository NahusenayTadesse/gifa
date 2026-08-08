<script lang="ts">
	import PageHero from '$lib/components/page-hero.svelte';
	import GalleryLightbox from '$lib/components/GalleryLightbox.svelte';
	import { assetUrl } from '$lib/assets';
	import { reveal, stagger } from '$lib/actions/reveal';
	import { Expand } from '@lucide/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const contextLabels: Record<string, string> = {
		food: 'Food',
		drink: 'Drink',
		interior: 'The room',
		event: 'Events',
		team: 'Team'
	};

	const contexts = $derived(
		Array.from(new Set(data.images.map((i) => i.context))).filter((c) => c in contextLabels)
	);

	let active = $state('all');

	const filtered = $derived(
		active === 'all' ? data.images : data.images.filter((i) => i.context === active)
	);

	let lightboxOpen = $state(false);
	let lightboxIndex = $state(0);

	function openAt(id: number) {
		const i = filtered.findIndex((img) => img.id === id);
		lightboxIndex = i === -1 ? 0 : i;
		lightboxOpen = true;
	}
</script>

<svelte:head>
	<title>Gallery | Gifa Restaurant & Lounge</title>
	<meta
		name="description"
		content="A look inside Gifa — the food, the coffee ceremony, the lounge at night, and past events. Seven Sisters Road, N15."
	/>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} />
{:else}
	<section class="relative isolate overflow-hidden border-b border-border py-20 text-center">
		<div class="spotlight" style="--spot-x: 50%; --spot-y: 20%"></div>
		<div class="container mx-auto px-4 sm:px-6">
			<p class="eyebrow">In the room</p>
			<h1 class="mt-3 font-heading text-4xl font-bold md:text-5xl">Gallery</h1>
			<p class="mx-auto mt-4 max-w-2xl text-muted-foreground">
				The food, the coffee ceremony, the lounge after dark — a look at Gifa before you book.
			</p>
		</div>
	</section>
{/if}

{#if contexts.length}
	<div class="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur">
		<div class="container mx-auto flex flex-wrap gap-2 px-4 py-4 sm:px-6">
			<button
				onclick={() => (active = 'all')}
				class="rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors {active ===
				'all'
					? 'border-primary bg-primary text-primary-foreground'
					: 'border-border text-muted-foreground hover:border-primary/50 hover:text-primary'}"
			>
				All
			</button>
			{#each contexts as context (context)}
				<button
					onclick={() => (active = context)}
					class="rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors {active ===
					context
						? 'border-primary bg-primary text-primary-foreground'
						: 'border-border text-muted-foreground hover:border-primary/50 hover:text-primary'}"
				>
					{contextLabels[context] ?? context}
				</button>
			{/each}
		</div>
	</div>
{/if}

<section class="py-14">
	<div class="container mx-auto px-4 sm:px-6">
		{#if filtered.length}
			{#key active}
				<div class="columns-2 gap-4 sm:columns-3 lg:columns-4">
					{#each filtered as image, i (image.id)}
						<button
							type="button"
							use:reveal={{ delay: stagger(i, 50), y: 20, scale: 0.97 }}
							onclick={() => openAt(image.id)}
							class="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-border text-left break-inside-avoid"
						>
							<img
								src={assetUrl(image.src)}
								alt={image.alt ?? ''}
								loading="lazy"
								decoding="async"
								class="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							/>
							<div
								class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"
							></div>
							<div
								class="pointer-events-none absolute top-3 right-3 flex size-8 scale-90 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
							>
								<Expand class="size-4" />
							</div>
							{#if image.caption || image.place}
								<div
									class="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 p-3 text-xs font-medium text-white opacity-0 transition-[transform,opacity] duration-500 group-hover:translate-y-0 group-hover:opacity-100"
								>
									{image.caption ?? image.place}
								</div>
							{/if}
						</button>
					{/each}
				</div>
			{/key}
		{:else}
			<p class="text-center text-muted-foreground">No photos here yet — check back soon.</p>
		{/if}
	</div>
</section>

<GalleryLightbox images={filtered} bind:open={lightboxOpen} bind:index={lightboxIndex} />
