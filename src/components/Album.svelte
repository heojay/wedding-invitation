<script>
	import { Navigation, Pagination, A11y, Thumbs } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	let thumbsSwiper = null;

	const setThumbsSwiper = (e) => {
		const [swiper] = e.detail;
		setTimeout(() => {
			thumbsSwiper = swiper;
		});
	};
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
</script>

<section>
	<div class="py-3 mx-auto">
		<h1 class="mb-8 text-2xl md:text-3xl font-bold text-center text-primary">사진첩</h1>
		<div class="mb-2">
			<Swiper
				modules={[Navigation, Pagination, A11y, Thumbs]}
				thumbs={{ swiper: thumbsSwiper }}
				slidesPerView={1}
				navigation={true}
				pagination={true}
				centeredSlides={true}
				setWrapperSize={true}
			>
				{#each Array(8) as _, index (index)}
					<SwiperSlide>
						<div class="flex justify-center">
							<img src="/images/album/1.png" alt={index + 1} />
						</div>
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>
		<Swiper
			on:swiper={setThumbsSwiper}
			modules={[Navigation, Pagination, A11y, Thumbs]}
			slidesPerView={3}
			spaceBetween={10}
			watchSlidesProgress={true}
		>
			{#each Array(8) as _, index (index)}
				<SwiperSlide
					><img class="thumb-img" src="/images/album/1.png" alt={index + 1} /></SwiperSlide
				>
			{/each}
		</Swiper>
	</div>
</section>

<style>
	.thumb-img {
		object-fit: cover;
		aspect-ratio: 1 / 1;
		width: 100%;
	}
</style>
