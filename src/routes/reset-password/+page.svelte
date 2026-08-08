<script lang="ts">
	import { page } from '$app/stores';
	import { authClient } from '$lib/auth-client';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { Loader2, AlertCircle, CheckCircle2 } from '@lucide/svelte';
	import { goto } from '$app/navigation';

	const token = $derived($page.url.searchParams.get('token'));

	let password = $state('');
	let confirmPassword = $state('');
	let isLoading = $state(false);
	let errorMessage = $state('');
	let isSuccess = $state(false);

	const passwordsMatch = $derived(password === confirmPassword);
	const isPasswordValid = $derived(password.length >= 8);
	const canSubmit = $derived(passwordsMatch && isPasswordValid && token && !isLoading);

	async function handleReset(e: SubmitEvent) {
		e.preventDefault();
		if (!canSubmit) return;

		isLoading = true;
		errorMessage = '';

		const { error } = await authClient.resetPassword({
			newPassword: password,
			token: token as string
		});

		isLoading = false;

		if (error) {
			errorMessage = error.message || 'Something went wrong. Please try again.';
		} else {
			isSuccess = true;
			setTimeout(() => {
				goto('/login');
			}, 3000);
		}
	}
</script>

<div class="container flex h-screen w-screen flex-col items-center justify-center">
	<Card.Root class="w-full max-w-md border-border bg-card text-card-foreground shadow-lg">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl font-bold tracking-tight">
				Reset your password
			</Card.Title>
			<Card.Description class="text-muted-foreground">
				Choose a new password for your account.
			</Card.Description>
		</Card.Header>
		<Card.Content>
			{#if !token}
				<div
					class="flex items-start gap-2 rounded-lg bg-destructive/15 p-3 text-sm text-destructive"
				>
					<AlertCircle class="h-5 w-5 shrink-0" />
					<p>
						<strong>Invalid link:</strong>
						This reset link is missing or has expired. Request a new one from the forgot password page.
					</p>
				</div>
			{:else if isSuccess}
				<div class="flex items-start gap-3 rounded-lg bg-primary/10 p-4 text-sm text-primary">
					<CheckCircle2 class="h-5 w-5 shrink-0" />
					<div>
						<p class="font-medium">Password updated</p>
						<p class="mt-1 text-muted-foreground">
							You can now sign in with your new password.
						</p>
					</div>
				</div>
			{:else}
				<form onsubmit={handleReset} class="space-y-4">
					{#if errorMessage}
						<div
							class="flex items-center gap-2 rounded-lg bg-destructive/15 p-3 text-sm text-destructive"
						>
							<AlertCircle class="h-4 w-4" />
							<span>{errorMessage}</span>
						</div>
					{/if}

					<div class="space-y-2">
						<Label for="password" class="text-foreground">New password</Label>
						<Input
							id="password"
							type="password"
							bind:value={password}
							required
							disabled={isLoading}
							class="border-input bg-background text-foreground"
						/>
						{#if password && !isPasswordValid}
							<p class="text-xs text-destructive">Password must be at least 8 characters</p>
						{/if}
					</div>

					<div class="space-y-2">
						<Label for="confirmPassword" class="text-foreground">
							Confirm new password
						</Label>
						<Input
							id="confirmPassword"
							type="password"
							bind:value={confirmPassword}
							required
							disabled={isLoading}
							class="border-input bg-background text-foreground"
						/>
						{#if confirmPassword && !passwordsMatch}
							<p class="text-xs text-destructive">Passwords do not match</p>
						{/if}
					</div>

					<Button
						type="submit"
						class="w-full bg-primary text-primary-foreground hover:bg-primary/90"
						disabled={!canSubmit}
					>
						{#if isLoading}
							<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							Updating
						{:else}
							Update password
						{/if}
					</Button>
				</form>
			{/if}
		</Card.Content>
	</Card.Root>
</div>
