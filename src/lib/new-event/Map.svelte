<script>
	/** @type { ({ title: string, description: string, location: string, date: string, type: string, theme: string }) } */
	export let formValues;

	export let { title, description, location, date, type, theme } = formValues;
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
	{#if title || description || location || date || type || theme}
		<div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md w-full">
			<div class="lg:w-1/2 px-6">
				{#if title}
					<h2 class="title-font font-semibold text-white tracking-widest text-xs">TITLE</h2>
					<a class="leading-relaxed">{title}</a>
				{/if}
				{#if description}
					<h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">
						DESCRIPTION
					</h2>
					<p class="leading-relaxed">{description}</p>
				{/if}
			</div>
			<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
				{#if location}
					<h2 class="title-font font-semibold text-white tracking-widest text-xs">LOCATION</h2>
					<p class="leading-relaxed">{location}</p>
				{/if}
				{#if date}
					<h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">DATE</h2>
					<p class="leading-relaxed">{date}</p>
				{/if}
				{#if type}
					<h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">TYPE</h2>
					<p class="leading-relaxed">{type}</p>
				{/if}
				{#if theme}
					<h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">THEME</h2>
					<p class="leading-relaxed">{theme}</p>
				{/if}
			</div>
		</div>
	{/if}
</div>
