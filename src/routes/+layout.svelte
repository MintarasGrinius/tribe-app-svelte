<script>
	import './styles.css';
	import { Toaster } from 'svelte-french-toast';
</script>

<div class="app">
	<Toaster />
	<main class="min-h-screen">
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
	}
</style>
