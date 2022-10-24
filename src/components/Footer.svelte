<script lang="ts">
	function sharePage() {
		if (navigator.share) {
			navigator.share({
				title: document.title,
				url: window.location.href
			});
		} else {
			navigator.clipboard
				.writeText(window.location.href)
				.then(() => alert('링크가 클립보드에 복사되었습니다.'));
		}
	}
</script>

<section>
	<div class="text-center px-5 py-5">
		<button class="btn mx-5" on:click={sharePage}>공유하기</button>
		<button class="btn mx-5" onclick="window.location.href='/guestbook'">방명록 남기기</button>
	</div>
</section>
