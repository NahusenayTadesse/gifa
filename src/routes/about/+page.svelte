<script lang="ts">
	import ImageGallery from '$lib/components/image-gallery.svelte';
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import FaqSection from '$lib/components/faq-section.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { Accessibility, Users, UtensilsCrossed } from '@lucide/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>About Us | Gifa Restaurant & Lounge, Seven Sisters</title>
	<meta
		name="description"
		content="Traditional Eritrean and Ethiopian cooking, a coffee ceremony and a late lounge — seven minutes from Seven Sisters station."
	/>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} />
{/if}

<!-- A little of home -->
<section class="atmosphere py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div
				use:reveal={{ x: -32, y: 0, scale: 0.97, duration: 1100 }}
				class="group overflow-hidden rounded-2xl border border-border shadow-sm"
			>
				<img
					src="/image1.webp"
					alt="A shared plate of dishes on the table at Gifa"
					class="aspect-4/3 w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"
				/>
			</div>
			<div>
				<SectionHeading title="A little of home on Seven Sisters Road" align="start" rule />
				<p use:reveal={{ delay: 140 }} class="mt-6 text-lg text-muted-foreground">
					Gifa opened to give North London somewhere that feels like the Horn of Africa at its most
					generous — big shared plates, coffee that takes an hour, and a welcome that doesn't check
					the clock.
				</p>
				<p use:reveal={{ delay: 220 }} class="mt-4 text-muted-foreground">
					Our kitchen cooks Eritrean and Ethiopian food the traditional way. The berbere is blended
					to our own recipe. The stews are cooked down slowly, never rushed. The injera arrives fresh
					and folded, and there are no knives and forks unless you'd like them.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Two rooms, one evening -->
<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<SectionHeading title="Two rooms, one evening" />
		<div class="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
			<div use:reveal={{ delay: 0, y: 28, scale: 0.97 }} class="group text-center">
				<div class="overflow-hidden rounded-2xl border border-border">
					<img
						src="/image6.webp"
						alt="The main dining room at Gifa"
						class="aspect-4/3 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
					/>
				</div>
				<UtensilsCrossed class="mx-auto mt-5 size-8 text-primary" />
				<h3 class="mt-3 text-xl font-semibold">The restaurant</h3>
				<p class="mt-2 text-sm text-muted-foreground">
					For eating — daytime coffee, breakfast, long lunches, family dinners.
				</p>
			</div>
			<div use:reveal={{ delay: 140, y: 28, scale: 0.97 }} class="group text-center">
				<div class="overflow-hidden rounded-2xl border border-border">
					<img
						src="/image5.webp"
						alt="A glowing 'Lounge' sign at Gifa"
						class="aspect-4/3 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
					/>
				</div>
				<Users class="mx-auto mt-5 size-8 text-primary" />
				<h3 class="mt-3 text-xl font-semibold">The lounge</h3>
				<p class="mt-2 text-sm text-muted-foreground">
					For what comes after: cocktails, music and a room that stays warm well into the evening.
				</p>
			</div>
		</div>
		<p use:reveal={{ delay: 260 }} class="mx-auto mt-12 max-w-2xl text-center text-muted-foreground">
			Both are halal, and there's always a full plant-based menu — Eritrean and Ethiopian cooking
			has been feeding vegans beautifully for centuries, long before anyone called it that.
		</p>
	</div>
</section>

<!-- Everyone's welcome -->
<section class="relative isolate overflow-hidden py-20 text-primary-foreground">
	<img src="/coffee.webp" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover" />
	<div class="absolute inset-0 -z-10 bg-primary/90"></div>
	<div class="spotlight -z-10" style="--spot-x: 65%; --spot-y: 40%"></div>
	<div class="container mx-auto px-4 text-center sm:px-6">
		<div use:reveal={{ scale: 0.8, y: 12 }}>
			<Accessibility class="mx-auto size-8" />
		</div>
		<h2 use:reveal={{ delay: 100 }} class="mt-4 font-heading text-3xl font-bold md:text-4xl">
			Everyone's welcome
		</h2>
		<p use:reveal={{ delay: 200 }} class="mx-auto mt-4 max-w-2xl text-lg opacity-90">
			Wheelchair-accessible facilities, high chairs for the little ones, big tables for big groups,
			and staff happy to walk first-timers through the menu dish by dish. If you've never eaten
			with injera before, tell us — it's one of our favourite parts of the job.
		</p>
	</div>
</section>

{#if data.gallery.length}
	<section class="py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading title="The room" subtitle="A look inside Gifa." />
		</div>
		<div use:reveal={{ delay: 200, y: 40, duration: 1100 }} class="container mx-auto mt-12 px-4 sm:px-6">
			<ImageGallery images={data.gallery} />
		</div>
	</section>
{/if}

<FaqSection faqs={data.faqs} eyebrow="A Few Questions" subtitle="More about who we are and how we work." />
