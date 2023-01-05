<script lang="ts">
	/** @type {import('./$types').ActionData} */
	export let form;
	console.log(form);

	let selectedDate: string;

	function handleDateChange(event) {
		selectedDate = event.target.value;
	}
</script>

<section class="text-gray-400 bg-gray-900 body-font relative">
	<div class="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
		<div
			class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
		>
			<iframe
				width="100%"
				height="100%"
				title="map"
				class="absolute inset-0"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
				scrolling="no"
				src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
				style="filter: grayscale(1) contrast(1.2) opacity(0.16);"
			/>
			<div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
				<div class="lg:w-1/2 px-6">
					<h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
					<p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
				</div>
				<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
					<h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
					<a class="text-red-400 leading-relaxed">example@email.com</a>
					<h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
					<p class="leading-relaxed">123-456-7890</p>
				</div>
			</div>
		</div>
		<form
			method="POST"
			class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
		>
			<h2 class="text-white text-lg mb-1 font-medium title-font">Create new event</h2>
			<p class="leading-relaxed mb-5">
				Are you planning a special event? Our website makes it easy to create and share an event
				with just a few clicks. So go ahead, start planning your event today!
			</p>
			<div class="relative mb-4">
				<label for="title" class="leading-7 text-sm text-gray-400">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="relative mb-4">
				<label for="date" class="leading-7 text-sm text-gray-400">Date</label>
				<input
					type="date"
					bind:value={selectedDate}
					on:change={handleDateChange}
					name="date"
					id="date"
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="relative mb-4">
				<label for="description" class="leading-7 text-sm text-gray-400">Description</label>
				<textarea
					id="description"
					name="description"
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<button
				type="submit"
				class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
				>Button</button
			>
		</form>
	</div>
</section>
