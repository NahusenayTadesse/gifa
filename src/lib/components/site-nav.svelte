<script lang="ts">
	import { page } from '$app/state';
	import { Menu, X } from '@lucide/svelte';
	import { navLinks as links } from '$lib/nav-links';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';

	let open = $state(false);
</script>

<header
	class="border-gold/15 bg-void/85 sticky top-0 z-50 border-b backdrop-blur-lg supports-[backdrop-filter]:bg-void/70"
>
	<nav class="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
		<a href="/" class="flex items-center gap-3.5">
			<img
				src="/logo.webp"
				alt="Gifa Lounge"
				class="border-gold size-10 shrink-0 rounded-full border object-cover"
			/>
			<span class="font-heading text-gold text-sm tracking-[0.32em] uppercase">
				Gifa <span class="text-foil">Lounge</span>
			</span>
		</a>

		<div class="hidden items-center gap-10 md:flex">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="font-heading text-[11px] tracking-[0.24em] uppercase transition-colors hover:text-gold-light {page
						.url.pathname === link.href
						? 'text-gold'
						: 'text-cream/75'}"
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/book"
				class="border-gold text-gold hover:bg-gold hover:text-void font-heading inline-flex items-center border px-6 py-3 text-[10px] tracking-[0.3em] uppercase transition-colors duration-300"
			>
				Reserve
			</a>
			<ThemeToggle class="text-gold hover:bg-gold/10 hover:text-gold-light" />
		</div>

		<div class="flex items-center gap-1 md:hidden">
			<ThemeToggle class="text-gold hover:bg-gold/10 hover:text-gold-light" />
			<button class="text-gold p-2" aria-label="Toggle menu" onclick={() => (open = !open)}>
				{#if open}
					<X class="size-6" />
				{:else}
					<Menu class="size-6" />
				{/if}
			</button>
		</div>
	</nav>

	{#if open}
		<div class="border-gold/15 bg-void border-t md:hidden">
			<div class="container mx-auto flex flex-col gap-1 px-4 py-3 sm:px-6">
				{#each links as link (link.href)}
					<a
						href={link.href}
						class="font-heading hover:bg-muted hover:text-gold-light rounded-md px-2 py-2.5 text-xs tracking-[0.2em] uppercase transition-colors {page
							.url.pathname === link.href
							? 'text-gold'
							: 'text-cream/80'}"
						onclick={() => (open = false)}
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/book"
					class="border-gold text-gold font-heading mt-2 inline-flex items-center justify-center border px-4 py-2.5 text-xs tracking-[0.2em] uppercase"
					onclick={() => (open = false)}
				>
					Reserve
				</a>
			</div>
		</div>
	{/if}
</header>
