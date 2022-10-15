<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { onMount } from 'svelte';
	import { generateSlides } from '$lib/generateSlides';
	import '@splidejs/svelte-splide/css/default';

	let main: Splide;
	let thumbs: SplideSlide;

	const slides = generateSlides();

	const mainOptions = {
		type: 'loop',
		perPage: 1,
		perMove: 1,
		gap: '1rem',
		pagination: false,
		height: '100%'
	};

	const thumbsOptions = {
		type: 'slide',
		rewind: true,
		gap: '1rem',
		pagination: false,
		fixedWidth: 110,
		fixedHeight: 70,
		cover: true,
		focus: 'center' as const,
		isNavigation: true,
		updateOnMove: true
	};

	onMount(() => {
		if (main && thumbs) {
			main.sync(thumbs.splide);
		}
	});
</script>

<section>
	<div class="container px-5 py-12 mx-auto text-center">
		<h1 class="mb-10 text-5xl font-bold">사진첩</h1>
		<div class="flex-wrap">
			<div class="m-auto max-w-3xl">
				<Splide options={mainOptions} bind:this={main} aria-labelledby="thumbnails-example-heading">
					{#each slides as slide}
						<SplideSlide>
							<img src={slide.src} alt={slide.alt} />
						</SplideSlide>
					{/each}
				</Splide>
			</div>
			<div class="m-auto max-w-3xl">
				<Splide options={thumbsOptions} bind:this={thumbs}>
					{#each slides as slide}
						<SplideSlide>
							<img src={slide.src} alt={slide.alt} />
						</SplideSlide>
					{/each}
				</Splide>
			</div>
		</div>
	</div>
</section>
