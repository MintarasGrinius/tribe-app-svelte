<script>
	/** @type {import('./$types').ActionData} */
	import { page } from '$app/stores';
	import Auth from '$lib/Auth.svelte';
	import Dashboard from '$lib/Dashboard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>Tribe</title>
	<meta name="description" content="Tribe demo" />
</svelte:head>

{#if !$page.data.session}
	<Auth />
{:else}
	<Dashboard {data} />
{/if}
