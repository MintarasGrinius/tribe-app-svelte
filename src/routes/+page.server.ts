import PocketBase from 'pocketbase';
/** @type {import('./$types').Actions} */
import { redirect, fail } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';

const prisma = new PrismaClient();
const pb = new PocketBase('http://127.0.0.1:8090');

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]) as {
			email: string;
			password: string;
		};

		try {
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (error) {
			console.log(error);
			throw error;
		}

		throw redirect(303, '/dashboard');
	}
};
