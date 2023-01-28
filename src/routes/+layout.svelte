<script>
	import './styles.css';
	import { Toaster } from 'svelte-french-toast';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/subabaseClient';
	import { invalidate } from '$app/navigation';
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<div class="app">
	<Toaster />
	<main class="min-h-screen">
		<section class="text-gray-400 bg-gray-900 body-font min-h-screen flex flex-col">
			<Header avatar={data.avatar_url} user={data.session.user} />
			<slot />
			<Footer />
		</section>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
	}
</style>
