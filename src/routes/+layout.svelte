<script lang="ts">
	import './layout.css';
	import { ModeWatcher, mode } from 'mode-watcher';
	import { Toaster } from 'svelte-sonner';
	import SiteNav from '$lib/components/site-nav.svelte';
	import SiteFooter from '$lib/components/site-footer.svelte';
	import WhatsappChat from '$lib/components/whatsapp-chat.svelte';
	import AnnouncementBanner from '$lib/components/announcement-banner.svelte';
	import { page } from '$app/state';

	let { children, data } = $props();

	const isDashboard = $derived(
		page.url.pathname === '/dashboard' || page.url.pathname.startsWith('/dashboard/')
	);
</script>

<svelte:head>
	<link rel="icon" href="/logo-icon.webp" />
	<noscript>
		<!-- Belt and braces alongside the @media (scripting: none) rule in layout.css. -->
		<style>
			[data-reveal] {
				opacity: 1 !important;
				transform: none !important;
				filter: none !important;
			}
		</style>
	</noscript>
</svelte:head>

<ModeWatcher />
<Toaster theme={mode.current} richColors closeButton position="top-right" />

{#if isDashboard}
	{@render children?.()}
{:else}
	<!-- The public site has its own light/dark toggle (ThemeToggle, in
	     site-nav) driven by the same mode-watcher store as the dashboard's.
	     `.site-light` carries the warm daytime palette; `.dark` the room
	     after dark — see the comments above both blocks in layout.css. -->
	<div
		class={[
			'grain flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground',
			mode.current === 'dark' ? 'dark' : 'site-light'
		]}
	>
		<AnnouncementBanner announcements={data.announcements ?? []} />
		<SiteNav />
		<main class="flex-1">
			<!-- Keyed on the path so each navigation replays the page's entrance animations. -->
			{#key page.url.pathname}
				<div class="enter-fade" style="--enter-duration: 500ms">
					{@render children()}
				</div>
			{/key}
		</main>
		<SiteFooter settings={data.settings} />
		<WhatsappChat
			phones={data.settings?.phone ? [data.settings.phone] : []}
			email={data.settings?.email ?? undefined}
			businessName="Gifa Lounge"
			greeting="Hello! 👋 Ask us about a table, private hire, or anything on the menu."
			quickReplies={['Book a table for tonight', 'Do you take large groups?', 'What are your opening hours?']}
		/>
	</div>
{/if}
