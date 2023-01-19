<script lang="ts">
	export let formValues: {
		[key: string]: string;
	};
</script>

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
		style="filter: grayscale(1) contrast(1.2) opacity(0.8);"
	/>
	<div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
		<div class="lg:w-1/2 px-6">
			<h2 class="title-font font-semibold text-white tracking-widest text-xs">DESCRIPTION</h2>
			<p class="mt-1">{formValues.description}</p>
		</div>
		<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
			<h2 class="title-font font-semibold text-white tracking-widest text-xs">TITLE</h2>
			<a class="leading-relaxed">{formValues.title}</a>
			<h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">EMAIL</h2>
			<a class="text-red-400 leading-relaxed">example@email.com</a>
			<h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
			<p class="leading-relaxed">123-456-7890</p>
		</div>
	</div>
</div>
