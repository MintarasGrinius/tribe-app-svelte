<script lang="ts">
	import BigCard from '$lib/cards/BigCard.svelte';
	import Card from '$lib/cards/Card.svelte';
	import LittleCard from '$lib/cards/LittleCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="text-gray-400 bg-gray-900 body-font">
	<div class="container px-5 py-4 mx-auto">
		<div class="flex flex-wrap -m-4">
			{#each data.events as event}
				<Card {event} />
			{/each}
		</div>
	</div>
</section>
