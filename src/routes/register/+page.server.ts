/** @type {import('./$types').Actions} */
import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
		const { email, name, password, passwordConfirm, avatar } = Object.fromEntries([
			...formData
		]) as {
			email: string;
			name: string;
			password: string;
			passwordConfirm: string;
			avatar: File;
		};

		console.log('avatar', avatar, avatar?.name, avatar?.type, avatar?.size);
		try {
			await locals.pb
				.collection('users')
				.create({ email, name, password, passwordConfirm, avatar });
			await locals.pb.collection('users').authWithPassword(email, password);
		} catch (error: any) {
			const { data } = error.data;
			return fail(400, {
				email: { message: data?.email?.message, value: email },
				name: { message: name ? data?.name?.message : 'Cannot be blank.', value: name },
				password: { message: data?.password?.message, value: password },
				avatar: { message: data?.avatar?.message, value: avatar.name },
				passwordConfirm: {
					message: data?.passwordConfirm?.message,
					value: passwordConfirm
				}
			});
		}

		throw redirect(303, '/dashboard');
	}
};
