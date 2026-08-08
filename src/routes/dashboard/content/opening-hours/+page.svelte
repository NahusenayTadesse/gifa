<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index.js';
	import FormCard from '$lib/formComponents/FormCard.svelte';
	import Errors from '$lib/formComponents/Errors.svelte';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import { Save } from '@lucide/svelte';

	let { data } = $props();

	const { form, allErrors, enhance, delayed, message } = superForm(data.form, {
		resetForm: false,
		dataType: 'json'
	});

	$effect(() => {
		if (!$message) return;
		if ($message.type === 'error') toast.error($message.text);
		else toast.success($message.text);
	});
</script>

<svelte:head>
	<title>Opening Hours | Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4 p-2">
	<div>
		<h1 class="font-heading text-2xl font-bold">Opening Hours</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
			Drives the footer, the contact page and booking-time validation. This is the single
			highest-value piece of information on the site — keep it current.
		</p>
	</div>

	<FormCard title="Weekly hours" description="Changes go live as soon as you save.">
		<form method="post" action="?/save" id="hours" use:enhance class="flex flex-col gap-3">
			<Errors allErrors={$allErrors} />

			{#each data.weekdayNames as name, i}
				<div
					class="grid grid-cols-1 items-center gap-3 border-b border-border/60 pb-3 sm:grid-cols-4"
				>
					<span class="font-medium">{name}</span>
					<label class="flex items-center gap-2 text-sm">
						<Checkbox bind:checked={$form.days[i].isClosed} />
						Closed
					</label>
					<div class="flex flex-col gap-1">
						<Label class="text-xs text-muted-foreground">Open</Label>
						<Input type="time" bind:value={$form.days[i].openTime} disabled={$form.days[i].isClosed} />
					</div>
					<div class="flex flex-col gap-1">
						<Label class="text-xs text-muted-foreground">Close</Label>
						<Input
							type="time"
							bind:value={$form.days[i].closeTime}
							disabled={$form.days[i].isClosed}
						/>
					</div>
				</div>
			{/each}

			<Button type="submit" form="hours" class="mt-2 w-fit">
				{#if $delayed}
					<LoadingBtn name="Saving" />
				{:else}
					<Save class="size-4" /> Save Hours
				{/if}
			</Button>
		</form>
	</FormCard>
</div>
