<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import ContactForm from '$lib/forms/ContactForm.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { Mail, Phone, MapPin, Clock } from '@lucide/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const settings = $derived(data.settings);

	const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const formatTime = (t?: string | null) => {
		if (!t) return '';
		const [h, m] = t.split(':');
		const hour = Number(h);
		const suffix = hour >= 12 ? 'pm' : 'am';
		const twelve = hour % 12 === 0 ? 12 : hour % 12;
		return m === '00' ? `${twelve}${suffix}` : `${twelve}:${m}${suffix}`;
	};
</script>

<svelte:head>
	<title>Contact & Directions | Gifa Restaurant & Lounge, N15 6EP</title>
	<meta
		name="description"
		content="Find Gifa at 513 Seven Sisters Road, London N15 6EP. Opening hours, phone, delivery and directions."
	/>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} />
{/if}

<section class="py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
			<div use:reveal={{ delay: 0, y: 32, scale: 0.97 }}>
				<Card class="lift group h-full hover:border-primary/40 hover:shadow-lg">
					<CardContent class="pt-6">
						<MapPin class="size-8 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" />
						<h3 class="mt-4 font-semibold">Address</h3>
						<p class="mt-2 text-sm text-muted-foreground">
							{settings?.address ?? '513 Seven Sisters Road, London N15 6EP'}
						</p>
						<p class="mt-2 text-xs text-muted-foreground">
							Seven Sisters (Victoria line, Overground) — about 7 minutes' walk.
						</p>
					</CardContent>
				</Card>
			</div>

			<div use:reveal={{ delay: 110, y: 32, scale: 0.97 }}>
				<Card class="lift group h-full hover:border-primary/40 hover:shadow-lg">
					<CardContent class="pt-6">
						<Mail class="size-8 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" />
						<h3 class="mt-4 font-semibold">Email & phone</h3>
						{#if settings?.email}
							<p class="mt-2">
								<a href="mailto:{settings.email}" class="text-sm break-all text-foreground hover:text-primary">
									{settings.email}
								</a>
							</p>
						{/if}
						{#if settings?.phone}
							<p class="mt-1">
								<a href="tel:{settings.phone.replace(/\s/g, '')}" class="text-sm text-foreground hover:text-primary">
									{settings.phone}
								</a>
							</p>
						{/if}
					</CardContent>
				</Card>
			</div>

			<div use:reveal={{ delay: 220, y: 32, scale: 0.97 }}>
				<Card class="lift group h-full hover:border-primary/40 hover:shadow-lg">
					<CardContent class="pt-6">
						<Clock class="size-8 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" />
						<h3 class="mt-4 font-semibold">Opening hours</h3>
						<ul class="mt-2 space-y-1 text-sm text-muted-foreground">
							{#each data.hours as row (row.weekday)}
								<li class="flex justify-between gap-4">
									<span>{dayNames[row.weekday]}</span>
									<span>
										{row.isClosed ? 'Closed' : `${formatTime(row.openTime)} – ${formatTime(row.closeTime)}`}
									</span>
								</li>
							{/each}
						</ul>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>

<!-- Enquiry form -->
<section class="atmosphere py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<SectionHeading
			title="Send Us a Message"
			subtitle="Tell us what you need and our team will get back to you."
		/>
		<div use:reveal={{ delay: 160, y: 32 }} class="mx-auto mt-12 max-w-2xl">
			<ContactForm data={data.form} />
		</div>
	</div>
</section>
