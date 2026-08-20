<script lang="ts">
	import {
		UserRoundCog,
		LayoutDashboard,
		Mail,
		Star,
		CalendarCheck,
		UtensilsCrossed,
		Image,
		PartyPopper,
		Clock,
		Megaphone,
		LayoutTemplate,
		Ticket
	} from '@lucide/svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';
	import { bgGradient } from '$lib/global.svelte';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import NavMain from './NavMain.svelte';

	let {
		messageNumber,
		...restProps
	}: ComponentProps<typeof Sidebar.Root> & { messageNumber?: number } = $props();

	const navigation = [
		{
			section: null,
			items: [
				{ title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
				{
					title: 'Bookings',
					url: '/dashboard/bookings',
					icon: CalendarCheck
				},
				{
					title: 'Enquiries',
					url: '/dashboard/enquiries',
					icon: Mail,
					counter: messageNumber
				},
				{
					title: 'Event Registrations',
					url: '/dashboard/event-registrations',
					icon: Ticket
				}
			]
		},
		{
			section: 'Website Content',
			items: [
				{
					title: 'Menu',
					url: '/dashboard/content/menu-items',
					icon: UtensilsCrossed,
					items: [
						{ title: 'Menu Items', url: '/dashboard/content/menu-items' },
						{ title: 'Menu Categories', url: '/dashboard/content/menu-categories' }
					]
				},
				{ title: 'Gallery', url: '/dashboard/content/gallery', icon: Image },
				{
					title: 'Events',
					url: '/dashboard/content/events',
					icon: PartyPopper,
					items: [
						{ title: 'Events', url: '/dashboard/content/events' },
						{ title: 'Event Gallery', url: '/dashboard/content/event-gallery' }
					]
				},
				{ title: 'Opening Hours', url: '/dashboard/content/opening-hours', icon: Clock },
				{ title: 'Announcements', url: '/dashboard/content/announcements', icon: Megaphone },
				{
					title: 'Pages',
					url: '/dashboard/content/heroes',
					icon: LayoutTemplate,
					items: [
						{ title: 'Page Banners', url: '/dashboard/content/heroes' },
						{ title: 'FAQs', url: '/dashboard/content/faqs' },
						{ title: 'Site Settings', url: '/dashboard/content/settings' }
					]
				},
				{ title: 'Reviews', url: '/dashboard/testimonials', icon: Star }
			]
		},
		{
			section: 'Administration',
			items: [
				{
					title: 'Admin Panel',
					url: '/dashboard/admin-panel',
					icon: UserRoundCog,
					items: [
						{ title: 'Users', url: '/dashboard/admin-panel/users' },
						{ title: 'Roles', url: '/dashboard/admin-panel/roles' }
					]
				}
			]
		}
	];

	const sidebar = useSidebar();
	function closeSidebar() {
		if (sidebar.isMobile) sidebar.setOpenMobile(false);
	}
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Content
		class="z-[9999] flex h-full [scrollbar-width:thin] [scrollbar-color:hsl(var(--border))_transparent] flex-col
      overflow-y-scroll
      pt-0
      [&::-webkit-scrollbar]:w-1.5
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-border
      [&::-webkit-scrollbar-track]:bg-transparent
      {bgGradient}"
	>
		<!-- Logo header -->
		<div class="sticky top-0 z-10 border-b border-border/60 bg-sidebar px-4 py-4">
			<a
				href="/"
				title="Go to Website Home Page"
				class="flex flex-row flex-wrap gap-2"
				target="_blank"
			>
				<img src="/logo.webp" alt="Logo" class="h-4 rounded-[1px]" />

				<div>
					<div class="text-[13px] font-medium tracking-tight text-foreground">Admin Panel</div>
					<div class="text-[10px] tracking-widest text-muted-foreground uppercase">Dashboard</div>
				</div>
			</a>
		</div>

		<!-- Nav sections -->
		<div class="flex-1 py-2">
			<NavMain {closeSidebar} sections={navigation} />
		</div>
	</Sidebar.Content>

	<!-- <Sidebar.Footer class="border-t border-border/60 bg-sidebar px-4 py-3">
		<p class="text-[10px] text-muted-foreground">
			Powered by{' '}
			<a
				href="https://nahusenaytadesse.vercel.app"
				target="_blank"
				class="font-medium text-foreground no-underline hover:underline"
			>
				NT
			</a>
		</p>
	</Sidebar.Footer> -->
</Sidebar.Root>
