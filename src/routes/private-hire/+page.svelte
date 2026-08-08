<script lang="ts">
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import ImageGallery from '$lib/components/image-gallery.svelte';
	import PrivateHireForm from '$lib/forms/PrivateHireForm.svelte';
	import { reveal, stagger } from '$lib/actions/reveal';
	import { Check } from '@lucide/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const included = [
		'Exclusive use of the lounge for your party',
		'Set menus built around your guests, including fully vegan spreads',
		'Full bar service, or a drinks package agreed in advance',
		'Space for a DJ or live music, and room to dance',
		'Coffee ceremony service on request',
		'Your own decorations welcome — we\'ll help you set up'
	];

	const steps = [
		{ title: 'Tell us about it.', body: 'Date, rough numbers, and what you\'re celebrating.' },
		{ title: 'We\'ll build a quote.', body: 'Food, drinks and hire, priced clearly with nothing hidden.' },
		{ title: 'Confirm with a deposit.', body: 'We\'ll hold the date and agree the final menu closer to the time.' },
		{ title: 'Turn up.', body: 'We handle the rest.' }
	];
</script>

<svelte:head>
	<title>Private Hire & Events | Gifa Lounge, North London</title>
	<meta
		name="description"
		content="Hire our Tottenham lounge for birthdays, engagements and parties. Set menus, full bar, space for a DJ."
	/>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} scrollCue />
{:else}
	<section class="relative isolate overflow-hidden border-b border-border py-20 text-center">
		<div class="spotlight" style="--spot-x: 50%; --spot-y: 20%"></div>
		<div class="container mx-auto px-4 sm:px-6">
			<h1 class="font-heading text-4xl font-bold md:text-5xl">Hire the lounge</h1>
			<p class="mx-auto mt-4 max-w-2xl text-muted-foreground">
				Birthdays, engagements, name-days, memorials, work parties, community meetings — Gifa's
				lounge is available for private hire, with the kitchen and bar to match.
			</p>
		</div>
	</section>
{/if}

{#if data.gallery.length}
	<section class="py-16">
		<div use:reveal={{ y: 40, duration: 1100 }} class="container mx-auto px-4 sm:px-6">
			<ImageGallery images={data.gallery} label="Past nights at the lounge" />
		</div>
	</section>
{/if}

<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<SectionHeading title="What you get" />
		<div class="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
			{#each included as item, i (item)}
				<div
					use:reveal={{ delay: stagger(i, 80), y: 16 }}
					class="glass-panel flex items-start gap-3 rounded-xl p-4"
				>
					<Check class="mt-0.5 size-5 shrink-0 text-primary" />
					<p class="text-sm text-muted-foreground">{item}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="relative isolate overflow-hidden py-20">
	<div class="spotlight" style="--spot-x: 20%; --spot-y: 60%"></div>
	<div class="container mx-auto px-4 sm:px-6">
		<SectionHeading title="How it works" />
		<div class="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as step, i (step.title)}
				<div use:reveal={{ delay: stagger(i, 100), y: 20 }} class="text-center">
					<div
						class="glow-gold mx-auto flex size-9 items-center justify-center rounded-full border border-primary text-sm font-semibold text-primary"
					>
						{i + 1}
					</div>
					<h3 class="mt-4 font-semibold">{step.title}</h3>
					<p class="mt-2 text-sm text-muted-foreground">{step.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if data.examples.length}
	<section class="atmosphere py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading title="Recent nights at Gifa" subtitle="A taste of what's happened here before." />
			<div class="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each data.examples as event, i (event.id)}
					<div
						use:reveal={{ delay: stagger(i, 90), y: 20 }}
						class="lift rounded-2xl border border-border bg-card p-5 hover:border-primary/40"
					>
						<p class="font-heading font-semibold">{event.title}</p>
						{#if event.eventType}<p class="eyebrow mt-1 text-primary">{event.eventType}</p>{/if}
						{#if event.description}<p class="mt-2 text-sm text-muted-foreground">{event.description}</p>{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-2xl">
			<SectionHeading title="Enquire about your event" />
			<div use:reveal={{ delay: 150, y: 24 }} class="mt-12">
				<PrivateHireForm data={data.form} />
			</div>
		</div>
	</div>
</section>
