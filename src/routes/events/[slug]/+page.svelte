<script lang="ts">
	import PageHero from '$lib/components/page-hero.svelte';
	import EventRegistrationForm from '$lib/forms/EventRegistrationForm.svelte';
	import ImageGallery from '$lib/components/image-gallery.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { CalendarDays, Clock, Ticket } from '@lucide/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const dateFormatter = new Intl.DateTimeFormat('en-GB', {
		weekday: 'long',
		day: 'numeric',
		month: 'long'
	});
	const timeFormatter = new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: '2-digit' });

	const galleryImages = $derived(
		data.gallery.map((photo) => ({ src: photo.imageUrl, alt: data.event.title }))
	);

	const startDate = $derived(dateFormatter.format(new Date(data.event.startsAt)));
	const startTime = $derived(timeFormatter.format(new Date(data.event.startsAt)));
	const endTime = $derived(data.event.endsAt ? timeFormatter.format(new Date(data.event.endsAt)) : null);

	const hero = $derived({
		eyebrow: data.event.eventType,
		title: data.event.title,
		tagline: `${startDate} · ${startTime}${endTime ? ` – ${endTime}` : ''}`,
		image: data.event.posterImage ?? 'image9.webp',
		imageAlt: data.event.title
	});
</script>

<svelte:head>
	<title>{data.event.title} | Gifa Restaurant & Lounge</title>
	<meta
		name="description"
		content={data.event.description ?? `${data.event.title} at Gifa Restaurant & Lounge — ${startDate}.`}
	/>
</svelte:head>

<PageHero {hero} />

<section class="py-16">
	<div class="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
		<div use:reveal={{ y: 20 }}>
			<h2 class="font-heading text-2xl font-semibold">About this event</h2>

			<div class="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
				<p class="flex items-center gap-2">
					<CalendarDays class="size-4 shrink-0 text-primary" />
					{startDate}
				</p>
				<p class="flex items-center gap-2">
					<Clock class="size-4 shrink-0 text-primary" />
					{startTime}{endTime ? ` – ${endTime}` : ''}
				</p>
				{#if data.event.ticketUrl}
					<a
						href={data.event.ticketUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-primary hover:underline"
					>
						<Ticket class="size-4 shrink-0" />
						Tickets / RSVP link
					</a>
				{/if}
			</div>

			{#if data.event.description}
				<p class="mt-6 text-muted-foreground">{data.event.description}</p>
			{/if}

			{#if data.event.bookingNote}
				<p class="mt-6 text-foreground italic">{data.event.bookingNote}</p>
			{/if}
		</div>

		<div use:reveal={{ delay: 150, y: 20 }} class="rounded-2xl border border-border bg-card p-6 sm:p-8">
			<h2 class="font-heading text-2xl font-semibold">Register</h2>
			<p class="mt-2 text-sm text-muted-foreground">
				Let us know you're coming and we'll have a spot ready.
			</p>
			<div class="mt-6">
				<EventRegistrationForm data={data.form} />
			</div>
		</div>
	</div>
</section>

{#if data.gallery.length}
	<section class="pb-20">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading title="Photos from this event" />
		</div>
		<div use:reveal={{ delay: 150, y: 40, duration: 1100 }} class="container mx-auto mt-12 px-4 sm:px-6">
			<ImageGallery images={galleryImages} label="{data.event.title} photos" />
		</div>
	</section>
{/if}
