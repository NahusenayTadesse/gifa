<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Page not found | Gifa Restaurant & Lounge</title>
</svelte:head>

<section class="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
	<p class="text-sm font-semibold tracking-widest text-primary uppercase">{page.status}</p>
	<h1 class="mt-4 font-heading text-3xl font-bold md:text-4xl">This page has left the table.</h1>
	<p class="mt-4 max-w-md text-muted-foreground">Nothing here — but the menu's still on.</p>
	<Button href="/menu" size="lg" class="mt-8">Back to the menu</Button>
</section>
