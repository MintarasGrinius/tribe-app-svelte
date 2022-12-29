/** @type {import('./$types').Actions} */

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

		const user = await prisma.user.create({
			data: {
				email: email as string,
				password: password as string,
				phone: phone as string,
				name: name as string,
				age: parseInt(age as string)
			}
		});

		return {
			success: true,
			body: user
		};
	}
};
