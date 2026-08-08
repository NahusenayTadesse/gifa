<script lang="ts">
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import { assetUrl } from '$lib/assets';
	import { reveal, stagger } from '$lib/actions/reveal';
	import { Button } from '$lib/components/ui/button';
	import { CalendarDays, Ticket, ArrowRight } from '@lucide/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const dateFormatter = new Intl.DateTimeFormat('en-GB', {
		weekday: 'short',
		day: 'numeric',
		month: 'short'
	});
	const timeFormatter = new Intl.DateTimeFormat('en-GB', {
		hour: 'numeric',
		minute: '2-digit'
	});

	const formatDate = (value: Date | string) => dateFormatter.format(new Date(value));
	const formatTime = (value: Date | string) => timeFormatter.format(new Date(value));
</script>

<svelte:head>
	<title>Events | Gifa Restaurant & Lounge</title>
	<meta
		name="description"
		content="Live music, DJ nights and coffee ceremonies coming up at Gifa — Seven Sisters Road, N15."
	/>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} />
{:else}
	<section class="relative isolate overflow-hidden border-b border-border py-20 text-center">
		<div class="spotlight" style="--spot-x: 50%; --spot-y: 20%"></div>
		<div class="container mx-auto px-4 sm:px-6">
			<p class="eyebrow">What's on</p>
			<h1 class="mt-3 font-heading text-4xl font-bold md:text-5xl">Events</h1>
			<p class="mx-auto mt-4 max-w-2xl text-muted-foreground">
				Live music, DJ nights and coffee ceremonies — here's what's coming up at the lounge.
			</p>
		</div>
	</section>
{/if}

<section class="py-14">
	<div class="container mx-auto px-4 sm:px-6">
		{#if !data.hero}
			<SectionHeading eyebrow="What's on" title="Upcoming events" rule />
		{/if}

		{#if data.events.length}
			<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each data.events as event, i (event.id)}
					<article
						use:reveal={{ delay: stagger(i, 60), y: 20 }}
						class="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
					>
						<a href="/events/{event.slug}" class="block">
							{#if event.posterImage}
								<div class="aspect-4/3 w-full overflow-hidden">
									<img
										src={assetUrl(event.posterImage)}
										alt={event.title}
										loading="lazy"
										decoding="async"
										class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									/>
								</div>
							{/if}
						</a>
						<div class="flex flex-1 flex-col p-5">
							{#if event.eventType}
								<p class="eyebrow mb-2">{event.eventType}</p>
							{/if}
							<h3 class="font-heading text-xl font-semibold">
								<a href="/events/{event.slug}" class="hover:text-primary">{event.title}</a>
							</h3>
							<p class="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
								<CalendarDays class="size-4 shrink-0" />
								{formatDate(event.startsAt)} · {formatTime(event.startsAt)}
							</p>
							{#if event.description}
								<p class="mt-3 line-clamp-3 text-sm text-muted-foreground">{event.description}</p>
							{/if}
							<div class="mt-4 flex flex-wrap items-center gap-3">
								<Button href="/events/{event.slug}" size="sm" class="group/btn gap-1.5">
									Details & register
									<ArrowRight class="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
								</Button>
								{#if event.ticketUrl}
									<a
										href={event.ticketUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-primary uppercase hover:underline"
									>
										<Ticket class="size-3.5" />
										Tickets / RSVP
									</a>
								{/if}
							</div>
						</div>
					</article>
				{/each}
			</div>
		{:else}
			<p class="mt-10 text-center text-muted-foreground">
				Nothing on the calendar right now — check back soon, or follow us for announcements.
			</p>
		{/if}
	</div>
</section>
