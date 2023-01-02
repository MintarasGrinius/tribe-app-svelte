/** @type {import('./$types').Actions} */
import { redirect, fail } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const phone = data.get('phone');
		const name = data.get('name');
		const age = data.get('age');

		let errors;

		if (!email) {
			errors = {
				email: 'Email is required'
			};
		}

		if (!password) {
			errors = {
				...errors,
				password: 'Password is required'
			};
		}

		if (!phone) {
			errors = {
				...errors,
				phone: 'Phone is required'
			};
		}

		if (!name) {
			errors = {
				...errors,
				name: 'Name is required'
			};
		}

		if (!age) {
			errors = {
				...errors,
				age: 'Age is required'
			};
		}

		if (errors) {
			return fail(400, { errors: errors });
		}

		await prisma.user.create({
			data: {
				email: email as string,
				password: password as string,
				phone: phone as string,
				name: name as string,
				age: parseInt(age as string)
			}
		});

		throw redirect(303, '/');
	}
};
