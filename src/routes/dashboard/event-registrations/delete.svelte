<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { Trash } from '@lucide/svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import { superForm } from 'sveltekit-superforms';
	import { toastOnError } from '$lib/superform-defaults';
	import { toast } from 'svelte-sonner';

	let { data, id }: { data: any; id: number } = $props();

	const { form, enhance, delayed, message } = superForm(data, {
		resetForm: false,
		id: `delete-${id}`,
		onError: toastOnError
	});

	$form.id = id;
	let open = $state(false);

	$effect(() => {
		if (!$message) return;
		if ($message.type === 'error') toast.error($message.text);
		else {
			toast.success($message.text);
			open = false;
		}
	});
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
		<Trash class="size-4" />
	</Dialog.Trigger>
	<Dialog.Content class="w-full">
		<Dialog.Header>
			<Dialog.Title>Delete registration</Dialog.Title>
		</Dialog.Header>
		<p class="text-center text-sm text-muted-foreground">This action can't be undone.</p>
		<div class="flex flex-row items-end justify-center gap-4 pt-4">
			<form method="post" action="?/delete" use:enhance>
				<input type="hidden" name="id" bind:value={$form.id} />
				<Button type="submit" variant="destructive">
					{#if $delayed}
						<LoadingBtn name="Deleting" />
					{:else}
						<Trash class="size-4" /> Delete
					{/if}
				</Button>
			</form>
			<Button variant="outline" onclick={() => (open = false)}>Cancel</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
