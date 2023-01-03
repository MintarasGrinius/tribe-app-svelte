<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<section class="text-gray-400 bg-gray-900 body-font min-h-screen">
	<Header />
	<slot />
	<Footer />
</section>
