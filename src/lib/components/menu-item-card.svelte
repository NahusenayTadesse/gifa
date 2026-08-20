<script lang="ts">
	import type { MenuItem } from '$lib/types';

	let { item }: { item: MenuItem } = $props();

	const tags = $derived(
		[
			item.isVegan && 'Vegan',
			!item.isVegan && item.isVegetarian && 'Vegetarian',
			item.isSpicy && 'Spicy'
		].filter(Boolean) as string[]
	);
</script>

<div class="menu-row py-6 first:pt-0">
	<div class="mb-2 flex items-baseline gap-x-3">
		<h4
			class="font-heading min-w-0 shrink text-lg tracking-[0.08em] uppercase {item.isAvailable
				? 'text-foreground'
				: 'text-muted-foreground line-through'}"
		>
			{item.name}
		</h4>
		<span class="menu-leader"></span>
		<span class="text-gold shrink-0 font-heading text-base tracking-[0.06em]">
			£{(item.price / 100).toFixed(2)}
		</span>
	</div>
	{#if tags.length || !item.isAvailable}
		<div class="mb-1.5 flex flex-wrap gap-2">
			{#each tags as tag (tag)}
				<span
					class="text-gold border-gold/40 font-heading rounded-full border px-2.5 py-0.5 text-[10px] tracking-[0.18em] uppercase"
				>
					{tag}
				</span>
			{/each}
			{#if !item.isAvailable}
				<span
					class="rounded-full border border-destructive/50 px-2.5 py-0.5 text-[10px] tracking-[0.18em] text-destructive uppercase"
				>
					Sold out tonight
				</span>
			{/if}
		</div>
	{/if}
	{#if item.description}
		<p class="font-sans text-[15px] leading-relaxed text-muted-foreground">{item.description}</p>
	{/if}
	{#if item.allergens?.length}
		<p class="text-ash mt-1 font-sans text-sm italic">Contains: {item.allergens.join(', ')}</p>
	{/if}
</div>
