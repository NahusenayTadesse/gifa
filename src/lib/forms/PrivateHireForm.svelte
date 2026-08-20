<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button/index';
	import InputComp from '$lib/formComponents/InputComp.svelte';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import Errors from '$lib/formComponents/Errors.svelte';
	import { Send, CircleCheckBig, CircleAlert } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import type { PrivateHireSchema } from '../../routes/private-hire/schema';
	import { toastOnError } from '$lib/superform-defaults';

	let {
		data,
		action = '?/enquire'
	}: { data: SuperValidated<Infer<PrivateHireSchema>>; action?: string } = $props();

	const { form, errors, allErrors, enhance, delayed, message } = superForm(data, {
		resetForm: true,
		onError: toastOnError
	});

	let sent = $state(false);

	$effect(() => {
		if (!$message) return;
		if ($message.type === 'error') {
			toast.error($message.text);
		} else {
			toast.success($message.text);
			sent = true;
		}
	});
</script>

{#if sent}
	<div
		class="flex flex-col items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-10 text-center"
	>
		<CircleCheckBig class="size-10 text-primary" />
		<p class="font-heading text-xl font-semibold">Enquiry sent</p>
		<p class="max-w-sm text-sm text-muted-foreground">
			We'll build a quote and get back to you shortly.
		</p>
		<Button variant="outline" class="mt-2" onclick={() => (sent = false)}>Send another enquiry</Button>
	</div>
{:else}
	<form method="POST" {action} id="private-hire" use:enhance class="flex flex-col gap-2">
		{#if $message?.type === 'error'}
			<div
				role="alert"
				aria-live="assertive"
				class="mb-2 flex items-center gap-2 rounded-lg bg-destructive/15 p-3 text-sm text-destructive"
			>
				<CircleAlert class="size-4 shrink-0" />
				{$message.text}
			</div>
		{/if}
		<Errors allErrors={$allErrors} />

		<div class="grid gap-2 sm:grid-cols-2">
			<InputComp {form} {errors} label="Name" type="text" name="name" required={true} />
			<InputComp {form} {errors} label="Email" type="email" name="email" required={true} />
			<InputComp {form} {errors} label="Phone" type="tel" name="phone" placeholder="Optional" />
			<InputComp {form} {errors} label="Event date" type="date" name="eventDate" />
			<InputComp {form} {errors} label="Approximate guests" type="number" name="guests" min="1" />
			<InputComp
				{form}
				{errors}
				label="Type of event"
				type="text"
				name="eventType"
				placeholder="Birthday, engagement, work party…"
			/>
		</div>

		<InputComp
			{form}
			{errors}
			label="Tell us what you have in mind"
			type="textarea"
			name="message"
			rows={4}
		/>

		<!-- Honeypot: hidden from people, irresistible to bots. -->
		<input
			type="text"
			name="website"
			bind:value={$form.website}
			tabindex="-1"
			autocomplete="off"
			aria-hidden="true"
			class="hidden"
		/>

		<Button type="submit" form="private-hire" size="lg" class="glow-gold mt-2 gap-2">
			{#if $delayed}
				<LoadingBtn name="Sending" />
			{:else}
				<Send class="size-4" /> Enquire about your event
			{/if}
		</Button>
	</form>
{/if}
