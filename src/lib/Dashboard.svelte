<script>
	import Card from '$lib/cards/Card.svelte';
	import Footer from './layout/Footer.svelte';
	import Header from './layout/Header.svelte';
	/** @type {import('../routes/$types').PageData} */
	export let data;
	/** @type {import('@supabase/supabase-js').AuthSession} */
	export let session;
</script>

<section class="text-gray-400 bg-gray-900 body-font">
	<div class="container px-5 py-4 mx-auto">
		<div class="flex flex-wrap -m-4">
			<!-- {#each data.events as event}
				<Card {event} />
			{/each} -->
		</div>
	</div>
</section>
