import { fail } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
		const { email, name, password, confirmPassword } = Object.fromEntries([...formData]) as {
			email: string;
			name: string;
			password: string;
			confirmPassword: string;
		};

		// const user = await locals.pb.collection('users').getFirstListItem('email="email@email.com"');
		// console.log('user', user);
		//  db.getUser(email);
		console.log('data', { email, name, password, confirmPassword });
		let errors = {
			email: { missing: false, value: email },
			name: { missing: false, value: name },
			password: { missing: false, value: password },
			confirmPassword: { missing: false, value: confirmPassword }
		};

		if (!email) errors.email = { missing: true, value: email };
		if (!name) errors.name = { missing: true, value: name };
		if (!password) errors.password = { missing: true, value: password };
		if (!confirmPassword) errors.confirmPassword = { missing: true, value: confirmPassword };

		if (Object.values(errors).some((error) => error.missing)) return fail(400, errors);

		try {
			await locals.pb.collection('users').create({ email, name, password, confirmPassword });
			await locals.pb.collection('users').authWithPassword(email, password);
		} catch (error) {
			console.log(error);
		}

		throw redirect(303, '/dashboard');
	}
};
