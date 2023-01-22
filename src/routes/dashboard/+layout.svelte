<script>
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="text-gray-400 bg-gray-900 body-font min-h-screen flex flex-col">
	<Header user={data.user} />
	<slot />
	<Footer />
</section>
