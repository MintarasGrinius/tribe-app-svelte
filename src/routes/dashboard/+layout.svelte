<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Modal from './Modal.svelte';
</script>

<section class="text-gray-400 bg-gray-900 body-font min-h-screen flex flex-col">
	<Header />
	<slot />
	<Footer />
</section>
