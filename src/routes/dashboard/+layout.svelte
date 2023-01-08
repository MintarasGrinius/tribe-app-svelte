<script lang="ts">
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="text-gray-400 bg-gray-900 body-font min-h-screen flex flex-col">
	<Header user={data.user} />
	<slot />
	<Footer />
</section>
