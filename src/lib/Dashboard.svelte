<script>
	import Card from '$lib/cards/Card.svelte';

	/** @type {import('../routes/$types').PageData} */
	export let data;
</script>

<section class="text-gray-400 bg-gray-900 body-font">
	<div class="container px-5 py-4 mx-auto">
		<div class="flex flex-wrap -m-4">
			{#each data.events as event}
				<Card {event} userId={data.session?.user.id} />
			{/each}
		</div>
	</div>
</section>
