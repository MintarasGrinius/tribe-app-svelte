<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if !$page.route.id?.includes('new-event')}
	<a
		href="/dashboard/new-event"
		class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
		>Create new event
		<svg
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			class="w-4 h-4 ml-1"
			viewBox="0 0 24 24"
		>
			<path d="M5 12h14M12 5l7 7-7 7" />
		</svg>
	</a>
{/if}
