import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export let pb;

if (process.env.NODE_ENV === 'production') {
	// For production
	pb = new PocketBase(process.env.PUBLIC_POCKETBASE_URL);
} else {
	// For development
	pb = new PocketBase(import.meta.env.PUBLIC_POCKETBASE_URL);
}
export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
	currentUser.set(pb.authStore.model);
});
