<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { CalendarDays, Ticket } from '@lucide/svelte';
	import { assetUrl } from '$lib/assets';

	type EventCard = {
		id: number;
		slug: string;
		title: string;
		description: string | null;
		eventType: string | null;
		startsAt: Date | string;
		posterImage: string | null;
		ticketUrl: string | null;
	};

	let { events, label = 'Upcoming events' }: { events: EventCard[]; label?: string } = $props();

	let api = $state<CarouselAPI>();
	let selected = $state(0);
	let snapCount = $state(0);

	const dateFormatter = new Intl.DateTimeFormat('en-GB', {
		weekday: 'short',
		day: 'numeric',
		month: 'short'
	});
	const timeFormatter = new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: '2-digit' });

	const formatDate = (value: Date | string) => dateFormatter.format(new Date(value));
	const formatTime = (value: Date | string) => timeFormatter.format(new Date(value));

	$effect(() => {
		events;
		if (!api) return;

		const sync = () => (selected = api!.selectedScrollSnap());
		const reset = () => {
			snapCount = api!.scrollSnapList().length;
			sync();
		};

		reset();
		api.on('select', sync).on('reInit', reset);

		return () => {
			api?.off('select', sync).off('reInit', reset);
		};
	});
</script>

<div class="relative">
	<Carousel.Root
		setApi={(embla) => (api = embla)}
		opts={{ loop: events.length > 2, align: 'start' }}
		aria-label={label}
	>
		<Carousel.Content class="-ml-4 py-2 sm:-ml-6">
			{#each events as event (event.id)}
				<Carousel.Item class="basis-[82%] pl-4 sm:basis-[55%] sm:pl-6 lg:basis-[38%]">
					<a
						href="/events/{event.slug}"
						class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
					>
						<div class="aspect-4/3 w-full overflow-hidden bg-muted">
							{#if event.posterImage}
								<img
									src={assetUrl(event.posterImage)}
									alt={event.title}
									loading="lazy"
									decoding="async"
									class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								/>
							{/if}
						</div>
						<div class="flex flex-1 flex-col p-5 text-left">
							{#if event.eventType}
								<p class="eyebrow mb-2">{event.eventType}</p>
							{/if}
							<h3 class="font-heading text-lg font-semibold">{event.title}</h3>
							<p class="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
								<CalendarDays class="size-4 shrink-0" />
								{formatDate(event.startsAt)} · {formatTime(event.startsAt)}
							</p>
							{#if event.description}
								<p class="mt-3 line-clamp-2 text-sm text-muted-foreground">{event.description}</p>
							{/if}
							{#if event.ticketUrl}
								<p class="text-primary mt-4 inline-flex items-center gap-2 self-start text-xs font-medium tracking-wide uppercase">
									<Ticket class="size-3.5" />
									Tickets / RSVP
								</p>
							{/if}
						</div>
					</a>
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		{#if events.length > 1}
			<Carousel.Previous
				class="-left-1 size-11 border-border bg-background/80 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-x-0.5 hover:bg-background hover:text-primary hover:shadow-xl active:scale-95 sm:-left-5"
			/>
			<Carousel.Next
				class="-right-1 size-11 border-border bg-background/80 shadow-lg backdrop-blur-md transition duration-300 hover:translate-x-0.5 hover:bg-background hover:text-primary hover:shadow-xl active:scale-95 sm:-right-5"
			/>
		{/if}
	</Carousel.Root>

	{#if snapCount > 1}
		<div class="mt-4 flex items-center justify-center gap-2">
			{#each Array.from({ length: snapCount }, (_, i) => i) as i (i)}
				<button
					type="button"
					aria-label="Show event {i + 1}"
					aria-current={i === selected ? 'true' : undefined}
					onclick={() => api?.scrollTo(i)}
					class="h-1.5 rounded-full transition-all duration-500 ease-out {i === selected
						? 'w-7 bg-primary'
						: 'w-1.5 bg-border hover:w-3 hover:bg-primary/60'}"
				></button>
			{/each}
		</div>
	{/if}
</div>
