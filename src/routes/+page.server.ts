/** @type {import('./$types').Actions} */
import { PrismaClient } from '@prisma/client';
import { fail, redirect, type Actions } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const user = await prisma.user.findFirst({
			where: {
				email: email as string,
				password: password as string
			}
		});

		if (!user) {
			return fail(400, { message: 'Invalid email or password' });
		}

		throw redirect(303, '/dashboard');
	}
};
