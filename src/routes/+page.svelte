<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ImageGallery from '$lib/components/image-gallery.svelte';
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import FaqSection from '$lib/components/faq-section.svelte';
	import EventsCarousel from '$lib/components/events-carousel.svelte';
	import DishIllustration from '$lib/components/dish-illustration.svelte';
	import Marquee from '$lib/components/marquee.svelte';
	import { reveal, stagger } from '$lib/actions/reveal';
	import {
		ArrowRight,
		ShieldCheck,
		Leaf,
		TrainFront,
		UtensilsCrossed,
		PartyPopper,
		CreditCard
	} from '@lucide/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const trustStrip = [
		{ icon: ShieldCheck, label: 'Halal kitchen' },
		{ icon: Leaf, label: 'Vegan & vegetarian menu' },
		{ icon: TrainFront, label: '7 min walk from Seven Sisters' },
		{ icon: UtensilsCrossed, label: 'Dine in · Takeaway · Delivery' },
		{ icon: PartyPopper, label: 'Private lounge hire' },
		{ icon: CreditCard, label: 'Card & contactless' }
	];
</script>

<svelte:head>
	<title>Gifa Restaurant & Lounge | Eritrean & Ethiopian Food, Seven Sisters N15</title>
	<meta
		name="description"
		content="Halal Eritrean and Ethiopian restaurant and cocktail lounge on Seven Sisters Road, N15. Injera, vegan platters, coffee ceremony and private hire. Book a table."
	/>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} slideshow={data.heroSlideshow} size="lg" scrollCue>
		<div
			class="enter-up mt-10 flex flex-wrap items-center justify-center gap-4"
			style="--enter-delay: 680ms"
		>
			<Button href="/book" size="lg" class="glow-gold gap-2">
				Book a table <ArrowRight class="size-4" />
			</Button>
			<Button
				href="/menu"
				size="lg"
				variant="outline"
				class="border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white"
			>
				View the menu
			</Button>
		</div>
		<div class="enter-up mt-4" style="--enter-delay: 780ms">
			<a href="https://www.just-eat.co.uk" target="_blank" rel="noreferrer noopener" class="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline">
				Order delivery on Just Eat
			</a>
		</div>
	</PageHero>
{/if}
{#if data.loungeGallery.length}
	<section class="py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading title="The room, after dark" subtitle="A look at Gifa once the lights go low." />
		</div>
		<div use:reveal={{ delay: 200, y: 40, duration: 1100 }} class="container mx-auto mt-12 px-4 sm:px-6">
			<ImageGallery images={data.loungeGallery} label="The lounge at night" />
		</div>
	</section>
{/if}
<Marquee
	items={[
		'Halal kitchen',
		'Coffee ceremony nightly',
		'Vegan menu always on',
		'Private lounge hire',
		'Dine in · Takeaway · Delivery',
		'7 min from Seven Sisters'
	]}
/>

<!-- Trust strip -->
<section class="border-b border-border py-10">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-6">
			{#each trustStrip as item, i (item.label)}
				<div use:reveal={{ delay: stagger(i, 60), y: 12 }} class="flex flex-col items-center gap-2">
					<item.icon class="size-6 text-primary" />
					<p class="text-xs text-muted-foreground">{item.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Our food -->
<section class="atmosphere py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<SectionHeading title="Food that takes its time" align="start" rule />
				<p use:reveal={{ delay: 120 }} class="mt-6 text-lg text-muted-foreground">
					Eritrean and Ethiopian cooking is built on patience — onions cooked down until they're
					sweet, berbere layered in slowly, spiced butter that perfumes the whole kitchen.
					Everything arrives on injera, the soft sourdough flatbread that's plate, spoon and side
					dish all at once.
				</p>
				<p use:reveal={{ delay: 200 }} class="mt-4 text-muted-foreground">
					Order a few dishes, put them in the middle, and eat with your hands from the same plate.
					It's the fastest way to make a table feel like a family.
				</p>
				<div use:reveal={{ delay: 280 }}>
					<Button href="/menu" variant="link" class="group mt-2 gap-1 px-0 text-primary">
						See the full menu
						<ArrowRight class="size-4 transition-transform duration-500 group-hover:translate-x-1" />
					</Button>
				</div>
			</div>
			<div
				use:reveal={{ x: 32, y: 0, scale: 0.97, duration: 1100 }}
				class="group overflow-hidden rounded-2xl border border-border shadow-sm"
			>
				<img
					src="/image2.webp"
					alt="A shared plate of stews at Gifa"
					class="aspect-4/3 w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Signature dishes -->
{#if data.dishes.length}
	<section class="atmosphere py-24">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading
				eyebrow="The Signatures"
				title="Plates that define the kitchen"
				subtitle="A few of the dishes people keep coming back for."
			/>
			<div class="mt-16 grid gap-8 sm:grid-cols-3 sm:items-stretch">
				{#each data.dishes as dish, i (dish.id)}
					<div use:reveal={{ delay: stagger(i, 100), y: 24, scale: 0.97 }} class="group relative h-full p-2">
						<div class="frame-corners border-gold/25 bg-linear-to-b from-shadow/90 to-deep/90 relative flex h-full flex-col border p-px transition-colors group-hover:border-gold/60">
							<div class="border-gold/20 from-gold/6 flex h-full flex-col border p-10 text-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] to-transparent">
								<DishIllustration index={i} />
								<p class="text-gold mb-3 font-sans text-xs tracking-[0.3em] italic uppercase">
									Plate No. {i + 1}
								</p>
								<h3 class="text-cream mb-4 text-xl tracking-[0.06em]">{dish.name}</h3>
								<p class="font-sans text-[15px] leading-relaxed text-cream/75">{dish.description}</p>
								<div class="mt-auto pt-7">
									<span
										class="border-gold text-gold relative inline-block border px-6 py-3 font-heading text-sm tracking-[0.2em]"
									>
										£{(dish.price / 100).toFixed(2)}
									</span>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}



<!-- Coffee ceremony -->
<section class="relative isolate overflow-hidden py-28">
	<img
		src="/coffee.webp"
		alt="Coffee beans roasting table-side at Gifa"
		class="absolute inset-0 -z-20 h-full w-full object-cover"
	/>
	<div class="scrim-ink absolute inset-0 -z-10"></div>
	<div class="absolute inset-0 -z-10 bg-void/60"></div>
	<div class="spotlight -z-10" style="--spot-x: 30%; --spot-y: 50%"></div>
	<div class="container mx-auto px-4 text-center sm:px-6">
		<p use:reveal class="eyebrow text-primary">Nº 01 · The Ritual</p>
		<h2 use:reveal={{ delay: 80 }} class="mt-3 text-3xl text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] md:text-4xl">
			The coffee ceremony
			<span class="heading-accent">bunna · ቡና</span>
		</h2>
		<p use:reveal={{ delay: 150 }} class="mx-auto mt-6 max-w-2xl text-lg text-cream drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
			Coffee here isn't an afterthought at the end of a meal — it's the reason people stay for
			another hour. Green beans roasted, ground and brewed in front of you, poured from a clay
			jebena, served with the room smelling of incense.
		</p>
		<p use:reveal={{ delay: 250 }} class="mx-auto mt-4 max-w-xl text-cream/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
			Ask us about it when you sit down. It takes a while. That's the point.
		</p>
		<div use:reveal={{ delay: 320 }} class="mt-8 flex justify-center">
			<span
				class="border-gold text-gold inline-block border px-6 py-3 font-heading text-sm tracking-[0.2em]"
			>
				£12 · for the table
			</span>
		</div>
	</div>
</section>

<!-- The lounge -->
<section class="relative isolate overflow-hidden py-28">
	<img
		src="/image5.webp"
		alt="A glowing 'Lounge' sign at Gifa"
		class="absolute inset-0 -z-20 h-full w-full object-cover"
	/>
	<div class="scrim-ink absolute inset-0 -z-10"></div>
	<div class="spotlight -z-10" style="--spot-x: 70%; --spot-y: 30%"></div>
	<div class="container mx-auto px-4 text-center sm:px-6">
		<p use:reveal class="eyebrow text-primary">After the plates are cleared</p>
		<h2 use:reveal={{ delay: 80 }} class="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
			Stay for the evening
		</h2>
		<p use:reveal={{ delay: 150 }} class="mx-auto mt-6 max-w-2xl text-lg text-white/80">
			Gifa becomes a lounge. Cocktails, low light, music, and a room that's built for lingering —
			whether that's four of you at the end of a long week or forty of you celebrating something.
		</p>
		<div use:reveal={{ delay: 250 }}>
			<Button href="/private-hire" size="lg" class="glow-gold mt-8">Hire the lounge</Button>
		</div>
	</div>
</section>

{#if data.events.length}
	<section class="py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading
				eyebrow="What's On"
				title="Upcoming events"
				subtitle="Live music, DJ nights and coffee ceremonies coming up at the lounge."
			/>
		</div>
		<div use:reveal={{ delay: 200, y: 40, duration: 1100 }} class="container mx-auto mt-12 px-4 sm:px-6">
			<EventsCarousel events={data.events} label="Upcoming events" />
		</div>
		<div class="mt-8 text-center">
			<Button href="/events" variant="link" class="group gap-1 text-primary">
				See all events
				<ArrowRight class="size-4 transition-transform duration-500 group-hover:translate-x-1" />
			</Button>
		</div>
	</section>
{/if}



{#if data.gallery.length}
	<section class="atmosphere py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading title="From the kitchen" subtitle="A taste of what's on the table." />
		</div>
		<div use:reveal={{ delay: 200, y: 40, duration: 1100 }} class="container mx-auto mt-12 px-4 sm:px-6">
			<ImageGallery images={data.gallery} label="Food at Gifa" />
		</div>
	</section>
{/if}

<div class="text-center">
	<Button href="/gallery" variant="link" class="group gap-1 text-primary">
		See the full gallery
		<ArrowRight class="size-4 transition-transform duration-500 group-hover:translate-x-1" />
	</Button>
</div>

<FaqSection faqs={data.faqs} eyebrow="A Few Questions" subtitle="The questions guests ask us most often." />

<!-- Final CTA -->
<section class="relative isolate overflow-hidden py-28">
	<img
		src="/hero.webp"
		alt="The dining room at Gifa Restaurant & Lounge"
		class="absolute inset-0 -z-20 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-linear-to-b from-black/75 via-black/70 to-black/80"></div>
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2
			use:reveal={{ delay: 100, y: 28, blur: 4, duration: 1100 }}
			class="mt-4 font-heading text-3xl font-bold text-white md:text-4xl"
		>
			Table for two, or a room for fifty?
		</h2>
		<p use:reveal={{ delay: 220 }} class="mx-auto mt-4 max-w-xl text-white/85">
			Book online, call us, or just walk in.
		</p>
		<div use:reveal={{ delay: 340 }} class="mt-8 flex flex-wrap items-center justify-center gap-4">
			<Button href="/book" size="lg" class="glow-gold">Book a table</Button>
			<Button
				href="tel:07950786579"
				size="lg"
				variant="outline"
				class="border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white"
			>
				Call 07950 786579
			</Button>
		</div>
	</div>
</section>
