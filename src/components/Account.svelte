<script lang="ts">
	import copy from 'copy-to-clipboard';

	const groomAccount = '0000-0000-0000 라인뱅크';
	const brideAccount = '0000-0000-0000 라인뱅크';
	const copyAccount = async (accountInfo) => {
		copy(accountInfo);
		alert('계좌번호가 복사되었습니다.');
	};
</script>

<section>
	<div class="py-2 mx-auto text-center">
		<h1 class="text-xl md:text-2xl font-bold text-center text-primary">마음 전해주실 곳</h1>
		<div class="p-4">
			<p class="text-sm">"신랑신부에게 축하의 마음을 전해주세요"</p>
			<div class="collapse sm:w-2/3 w-full bg-base-200 mx-auto my-5 rounded-box shadow-xl">
				<input type="checkbox" />
				<div class="p-5 collapse-title font-bold">신랑측 계좌번호</div>
				<div class="collapse-content text-sm">
					<button on:click={() => copyAccount(brideAccount)} class="px-3"
						>{groomAccount} 김신랑</button
					>
				</div>
			</div>
			<div class="collapse sm:w-2/3 w-full bg-base-200 mx-auto mt-5 rounded-box shadow-xl">
				<input type="checkbox" />
				<div class="p-5 collapse-title font-bold">신부측 계좌번호</div>
				<div class="collapse-content text-sm">
					<button on:click={() => copyAccount(brideAccount)} class="px-3"
						>{brideAccount} 김신부</button
					>
				</div>
			</div>
		</div>
	</div>
</section>
