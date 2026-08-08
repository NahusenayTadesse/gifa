<script lang="ts" module>
	import {
		Award,
		Coffee,
		Globe,
		HandCoins,
		Handshake,
		Leaf,
		MapPin,
		Package,
		ShieldCheck,
		Sprout,
		Stethoscope,
		Truck,
		Users
	} from '@lucide/svelte';

	/**
	 * Icons are stored in the database as plain names so the dashboard can pick
	 * one from a dropdown without shipping component references through the load.
	 */
	const icons = {
		Award,
		Coffee,
		Globe,
		HandCoins,
		Handshake,
		Leaf,
		MapPin,
		Package,
		ShieldCheck,
		Sprout,
		Stethoscope,
		Truck,
		Users
	};

	export type IconName = keyof typeof icons;
	export const iconNames = Object.keys(icons) as IconName[];
</script>

<script lang="ts">
	let {
		name,
		fallback = 'Leaf',
		...rest
	}: { name?: string | null; fallback?: IconName; class?: string } = $props();

	const Icon = $derived(icons[(name ?? '') as IconName] ?? icons[fallback]);
</script>

<Icon {...rest} />
