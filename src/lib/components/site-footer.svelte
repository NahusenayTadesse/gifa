<script lang="ts">
	import { navLinks } from '$lib/nav-links';

	let {
		settings
	}: {
		settings?: {
			phone?: string | null;
			email?: string | null;
			address?: string | null;
			instagramUrl?: string | null;
			facebookUrl?: string | null;
			footerBlurb?: string | null;
		} | null;
	} = $props();
</script>

<footer class="border-gold/15 bg-void border-t">
	<div class="container mx-auto px-4 py-20 sm:px-6">
		<div class="grid gap-12 md:grid-cols-4 md:gap-16">
			<div class="md:col-span-2">
				<a href="/" class="font-heading text-gold text-lg tracking-[0.28em] uppercase">Gifa Lounge</a>
				<p class="text-champagne mt-3 font-sans text-lg italic">a Habesha table, elegantly kept.</p>
				<p class="mt-4 max-w-sm font-sans text-[15px] text-cream/65">{settings?.address}</p>
				<p class="mt-2 max-w-sm font-sans text-[15px] text-cream/65">
					{settings?.footerBlurb ??
						'An Eritrean and Ethiopian restaurant and lounge on Seven Sisters Road.'}
				</p>
			</div>

			<div>
				<h3 class="font-heading text-gold mb-5 text-[10px] tracking-[0.3em] uppercase">Visit</h3>
				<ul class="grid gap-3">
					{#each navLinks as link (link.href)}
						<li>
							<a
								href={link.href}
								class="font-sans text-[15px] text-cream/70 transition-colors hover:text-gold-light"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="font-heading text-gold mb-5 text-[10px] tracking-[0.3em] uppercase">Find</h3>
				<ul class="grid gap-3 font-sans text-[15px] text-cream/70">
					{#if settings?.email}
						<li>
							<a href="mailto:{settings.email}" class="transition-colors hover:text-gold-light">
								{settings.email}
							</a>
						</li>
					{/if}
					{#if settings?.phone}
						<li>
							<a
								href="tel:{settings.phone.replace(/\s/g, '')}"
								class="transition-colors hover:text-gold-light"
							>
								{settings.phone}
							</a>
						</li>
					{/if}
					{#if settings?.instagramUrl}
						<li>
							<a
								href={settings.instagramUrl}
								target="_blank"
								rel="noreferrer noopener"
								class="transition-colors hover:text-gold-light"
							>
								Instagram
							</a>
						</li>
					{/if}
					{#if settings?.facebookUrl}
						<li>
							<a
								href={settings.facebookUrl}
								target="_blank"
								rel="noreferrer noopener"
								class="transition-colors hover:text-gold-light"
							>
								Facebook
							</a>
						</li>
					{/if}
				</ul>
			</div>
		</div>

		<div
			class="border-gold/15 mt-16 flex flex-col items-center justify-center gap-4 border-t pt-8 font-heading text-[10px] tracking-[0.24em] text-cream/50 uppercase sm:flex-row"
		>
			<p>&copy; {new Date().getFullYear()} Gifa Lounge Limited &middot; Made in London</p>
			<!-- <a
				href="http://nahusenaytadesse.vercel.app"
				target="_blank"
				rel="noreferrer noopener"
				class="hover:text-gold-light"
			>
				Developed by NT
			</a> -->
		</div>
	</div>
</footer>
