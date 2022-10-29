<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// eslint-disable-next-line no-undef
		new daum.roughmap.Lander({
			timestamp: '1661051801591',
			key: '2bfnx',
			mapHeight: '400'
		}).render();
	});
</script>

<svelte:head>
	<script
		charset="UTF-8"
		class="daum_roughmap_loader_script"
		src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
</svelte:head>
<section class="text-gray-600">
	<div class="container px-5 py-5 mx-auto">
		<h1 class="mb-10 text-4xl font-bold">오시는 길</h1>
		<div class="m-auto max-w-3xl">
			<span
				id="daumRoughmapContainer1661051801591"
				class="root_daum_roughmap root_daum_roughmap_landing w-full"
			/>
		</div>
		<div class="flex flex-col w-full mt-8">
			<div>
				<h2 class="text-gray-900 text-lg mt-1 font-medium title-font">주소</h2>
				<p class="leading-relaxed mt-1 text-gray-600">OO시 OO구 OO동 OO웨딩홀</p>
			</div>
			<div>
				<h2 class="text-gray-900 text-lg mt-5 font-medium title-font">지하철</h2>
				<p class="leading-relaxed mt-1 text-gray-600">[분당선] 서현역 4번 출구 도보 1분</p>
			</div>
			<div>
				<h2 class="text-gray-900 text-lg mt-5 font-medium title-font">도보</h2>
				<p class="leading-relaxed mt-1 text-gray-600">발 닿는 대로 맘 가는 대로</p>
			</div>
		</div>
	</div>
</section>
