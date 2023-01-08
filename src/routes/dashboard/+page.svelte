<script lang="ts">
	import BigCard from '$lib/cards/BigCard.svelte';
	import LittleCard from '$lib/cards/LittleCard.svelte';
	import type { PageData } from './$types';
	import { currentUser } from '$lib/pocketbase';
	export let data: PageData;
</script>

<div class="p-5 flex flex-wrap w-screen">
	<div class="flex flex-wrap md:-m-2 -m-1">
		{#if $currentUser}
			'Hello {$currentUser.name}'
		{/if}
		{#each data.events as event, index}
			<div class="flex flex-wrap w-1/2">
				<LittleCard />
				<LittleCard />
				<BigCard />
			</div>
			<div class="flex flex-wrap w-1/2">
				<BigCard />
				<LittleCard />
				<LittleCard />
			</div>
		{/each}
	</div>
</div>
