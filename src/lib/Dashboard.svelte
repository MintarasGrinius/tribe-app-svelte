<script>
	import Card from '$lib/cards/Card.svelte';
	/** @type {[]} */
	export let events;
</script>

<section class="text-gray-400 bg-gray-900 body-font">
	<div class="container px-5 py-4 mx-auto">
		<div class="flex flex-wrap -m-4">
			{#each events as event}
				<Card {event} />
			{/each}
		</div>
	</div>
</section>
