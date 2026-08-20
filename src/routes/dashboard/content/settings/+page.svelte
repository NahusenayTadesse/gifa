<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { toastOnError } from '$lib/superform-defaults';
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button/index.js';
	import FormCard from '$lib/formComponents/FormCard.svelte';
	import InputComp from '$lib/formComponents/InputComp.svelte';
	import Errors from '$lib/formComponents/Errors.svelte';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import { Save } from '@lucide/svelte';

	let { data } = $props();

	const { form, errors, allErrors, enhance, delayed, message } = superForm(data.form, {
		resetForm: false,
		onError: toastOnError
	});

	$effect(() => {
		if (!$message) return;
		if ($message.type === 'error') toast.error($message.text);
		else toast.success($message.text);
	});
</script>

<svelte:head>
	<title>Site Settings | Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4 p-2">
	<div>
		<h1 class="font-heading text-2xl font-bold">Site Settings</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
			Contact details, socials and the homepage hero copy. These appear in the footer, the
			Contact page and the top of the Home page.
		</p>
	</div>

	<FormCard title="Contact details" description="Changes go live as soon as you save.">
		<form method="post" action="?/save" id="settings" use:enhance class="flex flex-col gap-2">
			<Errors allErrors={$allErrors} />

			<InputComp {form} {errors} label="Phone" name="phone" type="text" placeholder="07950 786579" />
			<InputComp {form} {errors} label="Email" name="email" type="text" placeholder="gifalounge@gmail.com" />
			<InputComp
				{form}
				{errors}
				label="Address"
				name="address"
				type="text"
				placeholder="513 Seven Sisters Road, London N15 6EP"
			/>
			<InputComp {form} {errors} label="Instagram URL" name="instagramUrl" type="text" />
			<InputComp {form} {errors} label="Facebook URL" name="facebookUrl" type="text" />
			<InputComp {form} {errors} label="Just Eat delivery URL" name="justEatUrl" type="text" />
			<InputComp
				{form}
				{errors}
				label="Delivery available"
				name="deliveryEnabled"
				type="checkboxSingle"
				placeholder="Show delivery links on the site"
			/>
			<InputComp
				{form}
				{errors}
				label="Homepage hero heading"
				name="heroHeading"
				type="text"
				placeholder="Eritrean & Ethiopian, served the way it's meant to be — together."
			/>
			<InputComp
				{form}
				{errors}
				label="Homepage hero subheading"
				name="heroSub"
				type="textarea"
				rows={3}
			/>
			<InputComp
				{form}
				{errors}
				label="Footer paragraph"
				name="footerBlurb"
				type="textarea"
				rows={4}
			/>

			<Button type="submit" form="settings" class="mt-4">
				{#if $delayed}
					<LoadingBtn name="Saving" />
				{:else}
					<Save class="size-4" /> Save Settings
				{/if}
			</Button>
		</form>
	</FormCard>
</div>
