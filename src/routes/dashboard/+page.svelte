<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Mail, ArrowRight } from '@lucide/svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-6 p-2">
	<div>
		<h1 class="font-heading text-2xl font-bold">Website Content</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
			Everything on the public site is editable from here. Pick a section below, or use the sidebar.
		</p>
	</div>

	{#if data.unread > 0}
		<a href="/dashboard/enquiries" class="block">
			<Card class="border-primary/40 bg-primary/5 transition-colors hover:bg-primary/10">
				<CardContent class="flex items-center gap-3 py-4">
					<Mail class="size-5 text-primary" />
					<p class="text-sm font-medium">
						You have {data.unread} unread
						{data.unread === 1 ? 'enquiry' : 'enquiries'}
					</p>
					<ArrowRight class="ml-auto size-4 text-muted-foreground" />
				</CardContent>
			</Card>
		</a>
	{/if}

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each data.stats as stat (stat.label)}
			<a href={stat.href} class="block">
				<Card class="h-full transition-all hover:border-primary/40 hover:shadow-md">
					<CardContent class="py-6">
						<p class="font-heading text-3xl font-bold tabular-nums">{stat.value}</p>
						<p class="mt-1 text-sm text-muted-foreground">{stat.label}</p>
					</CardContent>
				</Card>
			</a>
		{/each}
	</div>

	<div class="flex flex-wrap gap-3">
		<Button href="/dashboard/content/heroes" variant="outline">Page banners</Button>
		<Button href="/dashboard/content/settings" variant="outline">Site settings</Button>
		<Button href="/dashboard/content/opening-hours" variant="outline">Opening hours</Button>
		<Button href="/dashboard/enquiries" variant="outline">Enquiries</Button>
	</div>
</div>
