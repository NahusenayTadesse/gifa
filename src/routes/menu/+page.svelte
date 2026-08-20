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
		<div
			class="font-heading container mx-auto flex flex-wrap gap-x-8 gap-y-2 overflow-x-auto px-4 py-4 text-[11px] tracking-[0.2em] uppercase sm:px-6"
		>
			{#each [...data.foodCategories, ...data.drinkCategories] as category (category.id)}
				<a href="#{category.slug}" class="text-cream/60 whitespace-nowrap transition-colors hover:text-gold">
					{category.name}
				</a>
			{/each}
		</div>
	</div>
{/if}

{#if data.foodCategories.length}
	<section class="atmosphere py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading eyebrow="Vegan, Meat & Breakfast" title="Food" />

			<div use:reveal={{ y: 30 }} class="frame-corners border-gold relative mx-auto mt-14 max-w-4xl border p-2">
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

			<div use:reveal={{ y: 30 }} class="frame-corners border-gold relative mx-auto mt-14 max-w-4xl border p-2">
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
