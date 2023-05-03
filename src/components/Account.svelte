<script lang="ts">
	import copy from 'copy-to-clipboard';
	import { Icon } from 'svelte-awesome';
	import copyIcon from 'svelte-awesome/icons/copy';

	const groomAccount = '<FILL_GROOM_ACCOUNT>';
	const brideAccount = '<FILL_BRIDE_ACCOUNT>';

	const copyAccount = async (accountInfo) => {
		copy(accountInfo);
		alert('계좌번호가 복사되었습니다.');
	};
</script>

<section>
	<div class="py-2 mx-auto text-center">
		<h1 class="text-xl md:text-2xl font-bold text-center text-primary">마음 전해주실 곳</h1>
		<div class="p-2">
			<p class="text-sm">"신랑신부에게 축하의 마음을 전해주세요"</p>
			<div class="collapse sm:w-2/3 w-full bg-base-200 mx-auto my-5 rounded-box shadow-xl">
				<input type="checkbox" />
				<div class="p-5 collapse-title font-bold">신랑측 계좌번호</div>
				<div class="collapse-content text-sm">
					<div>
						<div class="m-1 font-bold text-base">신랑 허신랑</div>
						<button on:click={() => copyAccount(groomAccount)}
							>{groomAccount}<Icon data={copyIcon} /></button
						>
					</div>
				</div>
			</div>
			<div class="collapse sm:w-2/3 w-full bg-base-200 mx-auto mt-5 rounded-box shadow-xl">
				<input type="checkbox" />
				<div class="p-5 collapse-title font-bold">신부측 계좌번호</div>
				<div class="collapse-content text-sm">
					<div>
						<div class="m-1 font-bold text-base">신부 정신부</div>
						<button on:click={() => copyAccount(brideAccount)}
							>{brideAccount}<Icon data={copyIcon} />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
