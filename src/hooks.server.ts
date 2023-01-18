import { serializeNonPOJOs } from './lib/helpers';
// src/hooks.server.js
import PocketBase from 'pocketbase';
import { redirect, type Handle } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = (async ({ event, resolve }) => {
	if (process.env.NODE_ENV === 'production') {
		// For production
		event.locals.pb = new PocketBase(process.env.PUBLIC_POCKETBASE_URL);
	} else {
		// For development
		event.locals.pb = new PocketBase(import.meta.env.PUBLIC_POCKETBASE_URL);
	}

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
		// event.locals.pb.authStore.isValid && (await event.locals.pb.collection('users').authRefresh());
	} catch (_) {
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
	}

	if (event.locals.pb.authStore.isValid) {
		// set the auth user to the request locals
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	}

	if (event.url.pathname.startsWith('/dashboard')) {
		if (!event.locals.user) {
			throw redirect(303, '/');
		}
	}

	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
}) satisfies Handle;
