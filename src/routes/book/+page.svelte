<script lang="ts">
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import BookingForm from '$lib/forms/BookingForm.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { Phone, Mail } from '@lucide/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Book a Table | Gifa Restaurant & Lounge N15</title>
	<meta
		name="description"
		content="Reserve a table at Gifa on Seven Sisters Road. Groups welcome, halal kitchen, full vegan menu."
	/>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} />
{:else}
	<section class="relative isolate overflow-hidden border-b border-border py-16 text-center">
		<div class="spotlight" style="--spot-x: 50%; --spot-y: 20%"></div>
		<div class="container mx-auto px-4 sm:px-6">
			<h1 class="font-heading text-4xl font-bold md:text-5xl">Book a table</h1>
			<p class="mx-auto mt-4 max-w-2xl text-muted-foreground">
				Reservations are recommended on Friday and Saturday evenings, and for any group of six or
				more. For everything else, walking in is usually fine.
			</p>
		</div>
	</section>
{/if}

<section class="py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto grid max-w-4xl gap-12 lg:grid-cols-3">
			<div use:reveal={{ y: 24 }} class="lg:col-span-2">
				<SectionHeading title="Request a table" align="start" />
				<p class="mt-3 text-sm text-muted-foreground">
					This is a request, not an instant confirmation — we'll call or email you to confirm.
				</p>
				<div class="mt-8">
					<BookingForm data={data.form} />
				</div>
			</div>

			<div use:reveal={{ delay: 150, y: 24 }}>
				<div class="glass-panel rounded-2xl p-6">
					<h3 class="font-heading text-lg font-semibold">Prefer to call?</h3>
					<div class="mt-4 flex items-center gap-2 text-sm">
						<Phone class="size-4 text-primary" />
						<a href="tel:07950786579" class="hover:text-primary">07950 786579</a>
					</div>
					<div class="mt-2 flex items-center gap-2 text-sm">
						<Mail class="size-4 text-primary" />
						<a href="mailto:gifalounge@gmail.com" class="hover:text-primary">gifalounge@gmail.com</a>
					</div>
					<p class="mt-4 text-xs text-muted-foreground">
						More than 12 guests? Head to <a href="/private-hire" class="underline hover:text-primary"
							>Private Hire</a
						> instead.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
