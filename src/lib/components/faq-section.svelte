<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		faqs,
		title = 'Frequently Asked Questions',
		eyebrow,
		subtitle,
		class: className = 'atmosphere'
	}: {
		faqs: { id: number; question: string; answer: string }[];
		title?: string;
		eyebrow?: string | null;
		subtitle?: string;
		class?: string;
	} = $props();
</script>

{#if faqs.length}
	<section class="py-20 {className}">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading {title} {eyebrow} {subtitle} />
			<div use:reveal={{ delay: 120, y: 28 }} class="border-gold/25 mx-auto mt-12 max-w-3xl border-t">
				<Accordion type="single" class="w-full">
					{#each faqs as faq (faq.id)}
						<AccordionItem value="item-{faq.id}" class="border-gold/20">
							<AccordionTrigger class="font-heading text-left text-sm tracking-[0.08em] uppercase hover:text-gold-light"
								>{faq.question}</AccordionTrigger
							>
							<AccordionContent class="font-sans text-base text-muted-foreground">{faq.answer}</AccordionContent>
						</AccordionItem>
					{/each}
				</Accordion>
			</div>
		</div>
	</section>
{/if}
