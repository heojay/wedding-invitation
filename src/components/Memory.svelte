<script lang="ts">
	import { Navigation, Pagination, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	export let isMemory = true;
	function getDayAfter(year, month, day) {
		const today = new Date();
		const dayAfter20141107 = new Date(year, month - 1, day);
		const diff = dayAfter20141107.getTime() - today.getTime();
		const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
		if (diffDays > 0) {
			return `D-${diffDays}`;
		} else {
			return `D+${diffDays * -1}`;
		}
	}

	const photos = [
		{
			id: 1,
			title: '첫번째 추억'
		},
		{
			id: 2,
			title: '두번째 추억'
		},
		{
			id: 3,
			title: '세번째 추억'
		}
	];
</script>

<div class="text-center justify-center modal-middle flex py-9 text-xl">
	<span class="px-3">허신랑</span>
	<button on:click={() => (isMemory = !isMemory)}
		><span
			class="tooltip tooltip-open tooltip-bottom px-3 text-4xl text-primary"
			data-tip="다시 눌러서 돌아가기">{getDayAfter(2021, 12, 18)}</span
		></button
	>
	<span class="px-3">정신부</span>
</div>

<div class="mx-auto">
	<div class="mb-2">
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			slidesPerView={1}
			navigation={true}
			pagination={true}
			centeredSlides={true}
			setWrapperSize={true}
		>
			{#each photos as photo}
				<SwiperSlide>
					<div class="flex justify-center">
						<div>
							<img src="/images/memory/{photo.id}.jpeg" alt={photo.id} />
							<div class="card p-4 m-5 bg-base-200 shadow-xl text-center">
								{photo.title}
							</div>
						</div>
					</div>
				</SwiperSlide>
			{/each}
		</Swiper>
	</div>
</div>
