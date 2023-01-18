import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';
import { PUBLIC_POCKETBASE_URL } from './env';

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
	console.log('authStore.onChange', auth);
	currentUser.set(pb.authStore.model);
});
