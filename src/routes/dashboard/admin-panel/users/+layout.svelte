<script>
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Plus, Sheet } from '@lucide/svelte';
	let { children } = $props();
</script>

<div class="mb-8 flex flex-row items-center justify-start gap-2">
	<Button
		href="/dashboard/admin-panel/users"
		variant={page.url.pathname === '/dashboard/admin-panel/users' ? 'default' : 'outline'}
		><Sheet /> Users</Button
	>
	<Button
		href="/dashboard/admin-panel/users/add-users"
		variant={page.url.pathname === '/dashboard/admin-panel/users/add-users' ? 'default' : 'outline'}
		><Plus /> Add Users</Button
	>
</div>


{@render children?.()}
