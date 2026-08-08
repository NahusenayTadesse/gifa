<script lang="ts">
	/**
	 * Simple line-art food glyphs, cycled by index — the sig-illustration motif
	 * from design.html's signature-dishes grid (injera platter, sizzling tibs
	 * pan, jebena coffee pot). Purely decorative, so no alt text.
	 */
	let { index = 0 }: { index?: number } = $props();

	const kind = $derived(['platter', 'tibs', 'jebena'][index % 3]);
</script>

<div class="flex h-[140px] items-center justify-center text-gold">
	{#if kind === 'platter'}
		<svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="100" cy="100" r="88" stroke="currentColor" stroke-width="0.6" opacity="0.4" />
			<circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.06" />
			<g opacity="0.5" fill="currentColor">
				<circle cx="65" cy="80" r="1" /><circle cx="85" cy="70" r="0.8" />
				<circle cx="105" cy="85" r="1.2" /><circle cx="130" cy="80" r="1" />
				<circle cx="70" cy="100" r="0.8" /><circle cx="95" cy="110" r="1" />
				<circle cx="125" cy="115" r="0.8" /><circle cx="80" cy="125" r="1.2" />
				<circle cx="110" cy="130" r="0.9" /><circle cx="135" cy="125" r="1" />
			</g>
			<circle cx="100" cy="70" r="16" fill="currentColor" opacity="0.55" />
			<circle cx="70" cy="95" r="14" fill="currentColor" opacity="0.35" />
			<circle cx="135" cy="98" r="15" fill="currentColor" opacity="0.7" />
			<circle cx="82" cy="130" r="13" fill="currentColor" opacity="0.3" />
			<circle cx="125" cy="132" r="14" fill="currentColor" opacity="0.5" />
		</svg>
	{:else if kind === 'tibs'}
		<svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
			<ellipse cx="100" cy="110" rx="80" ry="18" stroke="currentColor" stroke-width="0.8" fill="none" />
			<ellipse cx="100" cy="105" rx="75" ry="14" fill="currentColor" opacity="0.1" />
			<path d="M170 108 L192 108 L192 112 L170 112 Z" stroke="currentColor" stroke-width="0.8" fill="none" />
			<rect x="70" y="95" width="12" height="10" fill="currentColor" opacity="0.5" transform="rotate(15 76 100)" />
			<rect x="90" y="90" width="14" height="12" fill="currentColor" opacity="0.65" transform="rotate(-10 97 96)" />
			<rect x="110" y="98" width="12" height="10" fill="currentColor" opacity="0.5" transform="rotate(20 116 103)" />
			<rect x="80" y="108" width="14" height="10" fill="currentColor" opacity="0.65" transform="rotate(-15 87 113)" />
			<rect x="105" y="112" width="12" height="10" fill="currentColor" opacity="0.4" transform="rotate(5 111 117)" />
			<rect x="128" y="102" width="10" height="8" fill="currentColor" opacity="0.5" transform="rotate(-8 133 106)" />
			<path d="M80 75 Q 82 65, 78 55 Q 74 45, 80 35" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4" />
			<path d="M100 70 Q 104 60, 98 50 Q 92 40, 100 30" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4" />
			<path d="M120 75 Q 122 65, 118 55 Q 114 45, 120 35" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4" />
		</svg>
	{:else}
		<svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M75 130 Q 60 120, 65 95 Q 70 75, 90 70 L 90 55 L 110 55 L 110 70 Q 130 75, 135 95 Q 140 120, 125 130 Z"
				stroke="currentColor"
				stroke-width="1"
				fill="none"
			/>
			<path d="M110 78 Q 130 80, 140 85 Q 148 88, 148 92 L 138 90 Q 130 88, 120 90" stroke="currentColor" stroke-width="0.8" fill="none" />
			<path d="M65 100 Q 45 100, 45 115 Q 45 128, 62 125" stroke="currentColor" stroke-width="0.8" fill="none" />
			<ellipse cx="100" cy="55" rx="12" ry="4" fill="currentColor" opacity="0.6" />
			<circle cx="100" cy="48" r="3" stroke="currentColor" stroke-width="0.8" fill="none" />
			<path d="M77 105 L 123 105" stroke="currentColor" stroke-width="0.5" opacity="0.5" />
			<path d="M78 110 L 122 110" stroke="currentColor" stroke-width="0.5" opacity="0.4" />
			<path
				d="M40 155 Q 40 165, 50 165 L 60 165 Q 68 165, 68 155 L 68 150 L 40 150 Z"
				stroke="currentColor"
				stroke-width="0.7"
				fill="none"
			/>
			<ellipse cx="54" cy="150" rx="14" ry="2" fill="currentColor" opacity="0.3" />
			<path
				d="M132 155 Q 132 165, 142 165 L 152 165 Q 160 165, 160 155 L 160 150 L 132 150 Z"
				stroke="currentColor"
				stroke-width="0.7"
				fill="none"
			/>
			<ellipse cx="146" cy="150" rx="14" ry="2" fill="currentColor" opacity="0.3" />
			<path d="M100 40 Q 102 30, 98 22 Q 94 14, 100 6" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.5" />
			<path d="M92 42 Q 90 34, 94 26" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4" />
			<path d="M108 42 Q 110 34, 106 26" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4" />
		</svg>
	{/if}
</div>
