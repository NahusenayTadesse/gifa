<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button/index';
	import InputComp from '$lib/formComponents/InputComp.svelte';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import Errors from '$lib/formComponents/Errors.svelte';
	import { Send, CircleCheckBig, CircleAlert } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import type { BookingSchema } from '../../routes/book/schema';

	let {
		data,
		action = '?/book'
	}: { data: SuperValidated<Infer<BookingSchema>>; action?: string } = $props();

	const { form, errors, allErrors, enhance, delayed, message } = superForm(data, {
		resetForm: true
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
		<p class="font-heading text-xl font-semibold">Request sent</p>
		<p class="max-w-sm text-sm text-muted-foreground">
			We'll confirm by phone or email shortly. For a table in the next couple of hours, please call
			us on 07950 786579.
		</p>
		<Button variant="outline" class="mt-2" onclick={() => (sent = false)}>Book another table</Button>
	</div>
{:else}
	<form method="POST" {action} id="book" use:enhance class="flex flex-col gap-2">
		{#if $message?.type === 'error'}
			<div
				role="alert"
				aria-live="assertive"
				class="mb-2 flex items-center gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800"
			>
				<CircleAlert class="size-4 shrink-0" />
				{$message.text}
			</div>
		{/if}
		<Errors allErrors={$allErrors} />

		<div class="grid gap-2 sm:grid-cols-2">
			<InputComp {form} {errors} label="Name" type="text" name="name" required={true} />
			<InputComp {form} {errors} label="Phone" type="tel" name="phone" required={true} />
			<InputComp {form} {errors} label="Email" type="email" name="email" placeholder="Optional" />
			<InputComp {form} {errors} label="Occasion" type="text" name="occasion" placeholder="Optional" />
			<InputComp {form} {errors} label="Date" type="date" name="bookingDate" required={true} />
			<InputComp {form} {errors} label="Time" type="time" name="bookingTime" required={true} />
			<InputComp
				{form}
				{errors}
				label="Number of guests"
				type="number"
				name="partySize"
				min="1"
				max="30"
				required={true}
			/>
		</div>

		<InputComp
			{form}
			{errors}
			label="Anything we should know?"
			type="textarea"
			name="notes"
			rows={3}
			placeholder="Allergies, accessibility, high chairs…"
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

		<Button type="submit" form="book" size="lg" class="glow-gold mt-2 gap-2">
			{#if $delayed}
				<LoadingBtn name="Sending" />
			{:else}
				<Send class="size-4" /> Request booking
			{/if}
		</Button>
	</form>
{/if}
