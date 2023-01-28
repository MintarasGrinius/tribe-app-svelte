<script>
	/** @type {import('./$types').ActionData} */
	export let form;
	import { page } from '$app/stores';
	import Account from '$lib/Account.svelte';
	import Auth from '$lib/Auth.svelte';
	import Dashboard from '$lib/Dashboard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Tribe</title>
	<meta name="description" content="Tribe demo" />
</svelte:head>

{#if !$page.data.session}
	<Auth {form} />
{:else}
	<Dashboard {data} session={$page.data.session} />
{/if}
