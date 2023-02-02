<script>
	import RequestCard from '$lib/requests/RequestCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="text-gray-400 bg-gray-900 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">
				People who wish to attend
			</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				Here you will see people wo wish to attend your planned events. Feel free to check there
				applications and accept or decline their requests.
			</p>
		</div>
		<div class="flex flex-wrap -m-4">
			{#each data.requests as request}
				<RequestCard {request} />
			{/each}
		</div>
	</div>
</section>
