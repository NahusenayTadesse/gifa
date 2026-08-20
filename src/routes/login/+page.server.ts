import type { Actions, PageServerLoad } from './$types';
import { message, setError, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { loginSchema } from './schema';
import { redirect } from 'sveltekit-flash-message/server';
import { auth } from '$lib/server/auth';
import { APIError } from 'better-auth';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		return redirect(302, '/dashboard');
	}

	const form = await superValidate(zod4(loginSchema));

	return { form };
};

export const actions: Actions = {
	login: async (event) => {
		const form = await superValidate(event.request, zod4(loginSchema));
		if (!form.valid) {
			return message(
				form,
				{
					type: 'error',
					text: 'Please check the form'
				},
				{
					status: 400
				}
			);
		}

		const { email, password } = form.data;

		try {
			const result = await auth.api.signInEmail({
				body: {
					email,
					password
				}
			});

			if (!result.user) {
				setError(form, 'email', 'Invalid email or password');
				setError(form, 'password', 'Invalid email or password');
				return message(
					form,
					{
						type: 'error',
						text: 'An error occurred while logging in'
					},
					{
						status: 401
					}
				);
			}
		} catch (error) {
			if (error instanceof APIError) {
				return message(
					form,
					{
						type: 'error',
						text: error?.message
					},
					{
						status: 401
					}
				);
			}
			return message(
				form,
				{
					type: 'error',
					text: 'Login Failed'
				},
				{
					status: 500
				}
			);
		}

		return redirect(302, '/dashboard', { type: 'success', message: 'Signed in successfully' }, event.cookies);
	}
};
