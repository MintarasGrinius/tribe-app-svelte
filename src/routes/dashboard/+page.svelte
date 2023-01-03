<script>
	export let form;
	console.log(form);
</script>

<section class="text-gray-400 bg-gray-900 body-font min-h-screen">
	<header class="text-gray-400 sticky top-0 bg-gray-900/50 body-font">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
			<nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
				<a class="mr-5 hover:text-white">First Link</a>
				<a class="hover:text-white">Fourth Link</a>
			</nav>
			<a
				class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
				href="/dashboard"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
					viewBox="0 0 24 24"
				>
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
				</svg>
				<span class="ml-3 text-xl xl:block lg:hidden">tribe</span>
			</a>
			<div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
				<button
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
				</button>
			</div>
		</div>
	</header>
	<div class="p-5 flex flex-wrap w-screen">
		<div class="flex flex-wrap md:-m-2 -m-1">
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/500/300"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/501/301"
					/>
				</div>
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/600/360"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/601/361"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/502/302"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/503/303"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/500/300"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/501/301"
					/>
				</div>
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/600/360"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/601/361"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/502/302"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/503/303"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/500/300"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/501/301"
					/>
				</div>
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/600/360"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/601/361"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/502/302"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/503/303"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/500/300"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/501/301"
					/>
				</div>
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/600/360"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/601/361"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/502/302"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/503/303"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/500/300"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/501/301"
					/>
				</div>
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/600/360"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/601/361"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/502/302"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/503/303"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/500/300"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/501/301"
					/>
				</div>
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/600/360"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://picsum.photos/601/361"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/502/302"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://picsum.photos/503/303"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
