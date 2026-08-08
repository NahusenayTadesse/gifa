<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button/index';
	import InputComp from '$lib/formComponents/InputComp.svelte';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import Errors from '$lib/formComponents/Errors.svelte';
	import { PartyPopper, CircleCheckBig, CircleAlert } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import type { RegistrationSchema } from '../../routes/events/[slug]/schema';

	let {
		data,
		action = '?/register'
	}: { data: SuperValidated<Infer<RegistrationSchema>>; action?: string } = $props();

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
		<p class="font-heading text-xl font-semibold">You're on the list</p>
		<p class="max-w-sm text-sm text-muted-foreground">
			A confirmation is on its way to your inbox. Any questions before then? Call us on 07950
			786579.
		</p>
		<Button variant="outline" class="mt-2" onclick={() => (sent = false)}>
			Register someone else
		</Button>
	</div>
{:else}
	<form method="POST" {action} id="event-register" use:enhance class="flex flex-col gap-2">
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
			<InputComp {form} {errors} label="Your name" type="text" name="name" required={true} />
			<InputComp {form} {errors} label="Email" type="email" name="email" required={true} />
			<InputComp {form} {errors} label="Phone" type="tel" name="phone" placeholder="Optional" />
			<InputComp
				{form}
				{errors}
				label="Number of guests"
				type="number"
				name="guests"
				min="1"
				max="20"
				required={true}
			/>
		</div>

		<InputComp
			{form}
			{errors}
			label="Anything we should know?"
			type="textarea"
			name="notes"
			rows={4}
			placeholder="Dietary needs, accessibility, or anything else — optional"
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

		<Button type="submit" form="event-register" size="lg" class="glow-gold mt-2 gap-2">
			{#if $delayed}
				<LoadingBtn name="Registering" />
			{:else}
				<PartyPopper class="size-4" /> Register
			{/if}
		</Button>
	</form>
{/if}
