<script lang="ts">
	import Icon from 'svelte-awesome';
	import { mobile, envelopeOpenO } from 'svelte-awesome/icons';
	import { browser } from '$app/environment';

	$: if (groomModalOpen || brideModalOpen) {
		disableScroll();
	} else {
		enableScroll();
	}

	function disableScroll() {
		if (browser) {
			document.body.style.overflow = 'hidden';
		}
	}

	function enableScroll() {
		if (browser) {
			document.body.style.overflow = 'auto';
		}
	}

	const groomPhone = '<FILL_GROOM_PHONE_NUMBER>';
	const bridePhone = '<FILL_BRIDE_PHONE_NUMBER>';

	let groomModalOpen = false;
	let brideModalOpen = false;
</script>

<section>
	<div class="text-center mx-auto">
		<div class="mx-auto py-3 w-24">
			<img src="/images/flower.png" width="320" height="320" alt="flower" />
		</div>
		<div class="w-full mx-auto px-5 py-5">
			<p class="leading-relaxed text-base">
				만남은 쉽고<br />
				이별은 어려워<br />
				적절한 인사말이<br />
				들어갈 자리<br />
			</p>
		</div>
		<div class="w-full mx-auto px-5 py-5">
			<p class="text-gray-700 tracking-wider text-center">
				김시부 • 김시모 <span class="text-xs text-neutral">의 아들</span> 신랑<br />김장인 • 김장모
				<span class="text-xs text-neutral">의 딸</span> 신부
			</p>
		</div>
		<div class="flex justify-evenly my-7">
			<div class="w-1/3">
				<label for="groom-modal">
					<div
						class="rounded-full shadow-2xl overflow-hidden ring ring-secondary ring-offset-base-100 ring-offset-2"
					>
						<img src="/images/face/groom.png" width="450" height="450" alt="groom" />
					</div>
				</label>
			</div>
			<label for="bride-modal" class="w-1/3">
				<div
					class="rounded-full shadow-2xl overflow-hidden ring ring-secondary ring-offset-base-100 ring-offset-2"
				>
					<img src="/images/face/bride.png" width="400" height="400" alt="bride" />
				</div>
			</label>
		</div>
		<div class="text-gray-500 text-xs my-5">
			이미지를 클릭해서<br />연락처와 메시지를 확인해보세요.
		</div>
	</div>
</section>

<input
	on:click={() => (groomModalOpen = !groomModalOpen)}
	type="checkbox"
	id="groom-modal"
	class="modal-toggle"
/>
<label for="groom-modal" class="modal cursor-pointer">
	<label class="modal-box" for="">
		<div>
			<label for="groom-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
			<div class="w-2/3 mx-auto rounded-full shadow-2xl overflow-hidden">
				<img src="/images/face/groom.png" width="450" height="450" alt="groom" />
			</div>
			<div class="text-center my-5">
				<a href="tel:{groomPhone}"><Icon class="mx-3" data={mobile} scale="3" /></a><a
					href="sms:{groomPhone}"><Icon class="mx-3" data={envelopeOpenO} scale="2" /></a
				>
			</div>
			<div class="break-keep p-5">
				오랜 연애를 끝내고 결혼합니다.<br /><br />
				아직 많이 부족한 두 사람이지만 서로를 의지하고 아끼며 행복하게 살겠습니다.
			</div>
		</div>
	</label>
</label>

<input
	on:click={() => (brideModalOpen = !brideModalOpen)}
	type="checkbox"
	id="bride-modal"
	class="modal-toggle"
/>
<label for="bride-modal" class="modal cursor-pointer">
	<label class="modal-box" for="">
		<div>
			<label for="bride-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
			<div class="w-2/3 mx-auto rounded-full shadow-2xl overflow-hidden">
				<img src="/images/face/bride.png" width="400" height="400" alt="bride" />
			</div>
			<div class="text-center my-5">
				<a href="tel:{bridePhone}"><Icon class="mx-3" data={mobile} scale="3" /></a><a
					href="sms:{bridePhone}"><Icon class="mx-3" data={envelopeOpenO} scale="2" /></a
				>
			</div>
			<div class="break-keep p-5">
				나의 사랑,<br />
				내 어여쁜 자야<br />
				일어나서<br />
				함께 가자.<br /><br />
				- 아가 2:10
			</div>
		</div>
	</label>
</label>
