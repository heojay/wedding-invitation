<script lang="ts">
	const imgUrl = '/images/intro.png';

	function getDayBefore20230128() {
		const today = new Date();
		const dayBefore20230128 = new Date(2023, 0, 28);
		const diff = dayBefore20230128.getTime() - today.getTime();
		const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
		if (diffDays > 0) {
			return `D-${diffDays}`;
		} else {
			return `D+${diffDays}`;
		}
	}
</script>

<div class="text-center justify-center modal-middle flex py-9 text-xl">
	<span class="px-3">김신랑</span>
	<span class="px-3 text-4xl text-primary">{getDayBefore20230128()}</span>
	<span class="px-3">김신부</span>
</div>
<img src={imgUrl} alt="intro" class="w-full pb-5" />
<div class="text-center py-5 text-lg">
	<p>2023년 01월 28일 토요일 11시</p>
	<p>양재 엘블레스 다이아몬드홀</p>
</div>
