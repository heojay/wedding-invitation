<script lang="ts">
	import { generateSlides } from '$lib/generateSlides';
	const slides = generateSlides();
</script>

<section>
	<div class="container px-5 py-5 mx-auto">
		<h1 class="mb-10 text-4xl font-bold">사진첩</h1>
		<div class="carousel w-full">
			{#each slides as slide}
				<div id={slide.alt} class="carousel-item w-full">
					<img src={slide.src} class="w-full" />
				</div>
			{/each}
		</div>
		<div class="flex justify-center w-full pt-5 gap-3">
			{#each slides as slide, i}
				<a href="#{slide.alt}" class="btn btn-xs">{i + 1}</a>
			{/each}
		</div>
	</div>
</section>
