<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import FaqSection from '$lib/components/faq-section.svelte';
	import MenuItemCard from '$lib/components/menu-item-card.svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Menu | Gifa Restaurant & Lounge, Tottenham N15</title>
	<meta
		name="description"
		content="Breakfast, lamb tibs, vegan Bebi-Aynetu and Shero, all served on fresh injera. See the full halal Eritrean and Ethiopian menu at Gifa Lounge."
	/>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} />
{:else}
	<section class="atmosphere relative isolate overflow-hidden py-20 text-center">
		<div class="container mx-auto px-4 sm:px-6">
			<p class="eyebrow text-gold-light mx-auto mb-6">The Kitchen</p>
			<h1 class="mx-auto max-w-2xl text-4xl md:text-5xl">Our Bill of Fare</h1>
			<p class="mx-auto mt-3 font-sans text-xl text-muted-foreground italic">handwritten each morning</p>
			<p class="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground">
				Everything on this menu is halal. Dishes marked Vegan are fully plant-based. Please tell
				your server about any allergies before ordering — we'll talk you through every dish.
			</p>
		</div>
	</section>
{/if}

<!-- Jump nav -->
{#if data.foodCategories.length || data.drinkCategories.length}
	<div class="border-gold/15 bg-void/95 sticky top-20 z-30 border-b backdrop-blur">
		<div class="relative container mx-auto">
			<div
				class="font-heading no-scrollbar flex snap-x snap-mandatory scroll-px-4 flex-nowrap gap-x-7 gap-y-2 overflow-x-auto px-4 py-4 text-[11px] tracking-[0.2em] uppercase scroll-smooth sm:flex-wrap sm:gap-x-8 sm:overflow-visible sm:px-6 sm:scroll-auto"
			>
				{#each [...data.foodCategories, ...data.drinkCategories] as category (category.id)}
					<a
						href="#{category.slug}"
						class="text-cream/60 -my-2 -mx-1 snap-start whitespace-nowrap px-1 py-2 transition-colors hover:text-gold active:text-gold"
					>
						{category.name}
					</a>
				{/each}
			</div>
			<!-- mobile-only edge fades hinting more categories off-screen -->
			<div
				class="from-void via-void/80 pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r to-transparent sm:hidden"
				aria-hidden="true"
			></div>
			<div
				class="from-void via-void/80 pointer-events-none absolute inset-y-0 right-0 flex w-10 items-center justify-end bg-gradient-to-l to-transparent sm:hidden"
				aria-hidden="true"
			>
				<svg
					class="text-gold/70 mr-1 h-3.5 w-3.5 animate-pulse"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M9 18l6-6-6-6" />
				</svg>
			</div>
		</div>
	</div>
{/if}

{#if data.foodCategories.length}
	<section class="atmosphere py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading eyebrow="Vegan, Meat & Breakfast" title="Food" />

			<div use:reveal={{ y: 30 }} class="frame-corners border-gold relative mx-auto lg:mt-14 mt-4 max-w-4xl border p-2">
				<div class="border-gold/30 border p-8 sm:p-12">
					{#each data.foodCategories as category, ci (category.id)}
						<div id={category.slug} class="scroll-mt-40 {ci > 0 ? 'mt-12' : ''}">
							<h3 class="text-gold text-center text-xl tracking-[0.16em]">{category.name}</h3>
							{#if category.description}
								<p class="mt-2 text-center font-sans text-sm text-muted-foreground italic">
									{category.description}
								</p>
							{/if}
							<div class="mt-6 grid gap-x-14 md:grid-cols-2">
								{#each category.items as item (item.id)}
									<MenuItemCard {item} />
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
{/if}

{#if data.drinkCategories.length}
	<section class="atmosphere py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading eyebrow="The Bar" title="Drinks" subtitle="Ethiopian coffee, honey wine, cold beer and cocktails." />

			<div use:reveal={{ y: 30 }} class="frame-corners border-gold relative mx-auto lg:mt-14 mt-4 max-w-4xl border p-2">
				<div class="border-gold/30 border p-8 sm:p-12">
					{#each data.drinkCategories as category, ci (category.id)}
						<div id={category.slug} class="scroll-mt-40 {ci > 0 ? 'mt-12' : ''}">
							<h3 class="text-gold text-center text-xl tracking-[0.16em]">{category.name}</h3>
							{#if category.description}
								<p class="mt-2 text-center font-sans text-sm text-muted-foreground italic">
									{category.description}
								</p>
							{/if}
							<div class="mt-6 grid gap-x-14 md:grid-cols-2">
								{#each category.items as item (item.id)}
									<MenuItemCard {item} />
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
{/if}

<section class="py-16 text-center">
	<div class="container mx-auto flex flex-wrap items-center justify-center gap-4 px-4 sm:px-6">
		<Button href="/book" size="lg" class="glow-gold">Book a table</Button>
		<Button href="https://www.just-eat.co.uk" target="_blank" rel="noreferrer noopener" size="lg" variant="outline">
			Order on Just Eat
		</Button>
	</div>
</section>

<FaqSection faqs={data.faqs} eyebrow="A Few Questions" subtitle="Common questions about the menu and allergens." />
