<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import type { PageData } from './$types';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	export let data: PageData;
</script>

<section class="text-gray-400 bg-gray-900 body-font min-h-screen flex flex-col">
	<Header user={data.user} />
	<slot />
	<Footer />
</section>
