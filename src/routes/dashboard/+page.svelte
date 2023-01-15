<script lang="ts">
	import BigCard from '$lib/cards/BigCard.svelte';
	import LittleCard from '$lib/cards/LittleCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="p-5 flex flex-wrap w-screen">
	<div class="flex flex-wrap md:-m-2 -m-1">
		{#each data.events as event}
			<div class="flex flex-wrap w-1/2">
				{#if !!event[0]?.photo}
					<LittleCard event={event[0]} />
				{/if}
				{#if !!event[1]?.photo}
					<LittleCard event={event[1]} />
				{/if}
				{#if !!event[2]?.photo}
					<BigCard event={event[2]} />
				{/if}
			</div>
			<div class="flex flex-wrap w-1/2">
				{#if !!event[3]?.photo}
					<BigCard event={event[3]} />
				{/if}
				{#if !!event[4]?.photo}
					<LittleCard event={event[4]} />
				{/if}
				{#if !!event[5]?.photo}
					<LittleCard event={event[5]} />
				{/if}
			</div>
		{/each}
	</div>
</div>
