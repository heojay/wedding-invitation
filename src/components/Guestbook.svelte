<script lang="ts">
	import { browser } from '$app/environment';

	export let guestbooks;
	let name = '';
	let content = '';
	let open = false;
	let hide = false;
	let postDisabled = false;

	$: if (open) {
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

	async function doPost() {
		postDisabled = true;
		const res = await fetch('/api/guestbook', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				content,
				hide
			})
		});

		if (!res.ok) {
			console.log(res);
			alert('메시지 전송에 실패했습니다.');
			postDisabled = false;
			return;
		}
		if (!hide) {
			guestbooks = [{ name, content }, ...guestbooks];
		}

		alert('등록됐습니다.');
		name = '';
		content = '';
		postDisabled = false;
		return;
	}
</script>

<input on:click={() => (open = !open)} type="checkbox" id="my-modal" class="modal-toggle" />
<label for="my-modal" class="modal cursor-pointer">
	<label class="modal-box max-h-[36rem]" for="">
		<label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		{#if guestbooks}
			{#each guestbooks as guestbook}
				<div class="flex flex-col w-full p-5 my-3 bg-white rounded-lg shadow-md">
					<div>
						<p class="text-lg font-bold text-gray-700">{guestbook.name}</p>
						<p class="mt-2 text-sm text-gray-600">{guestbook.content}</p>
					</div>
				</div>
			{/each}
		{/if}
	</label>
</label>

<section>
	<div class="p-3 mx-auto">
		<h1 class="mb-2 text-2xl md:text-3xl font-bold text-center text-primary">방명록</h1>
		<p class="mb-6 text-sm text-center">"남겨주신 글은 오래도록 마음에 간직하겠습니다"</p>
		{#if guestbooks}
			<div class="carousel carousel-center p-4 space-x-4 bg-base-200 rounded-box mb-5">
				{#each guestbooks.slice(0, 5) as guestbook}
					<div class="carousel-item container w-1/2 sm:w-1/3">
						<label for="my-modal" class="w-full min-h-[6rem] p-4 bg-white shadow-2xl rounded-lg">
							<div>
								<p class="text-lg font-bold text-gray-700">
									{guestbook.name.slice(0, 7)}{#if guestbook.name.length > 7}...
									{/if}
								</p>
								<p class="mt-2 text-sm text-gray-600s">
									{guestbook.content.slice(0, 50)}
									{#if guestbook.content.length > 50}...
									{/if}
								</p>
							</div>
						</label>
					</div>
				{/each}
				<div class="carousel-item container w-auto m-auto">
					<label for="my-modal" class="btn bg-primary border-primary shadow-2xl">더보기</label>
				</div>
			</div>
			<div class="form-control">
				<input
					type="text"
					class="input input-bordered w-1/2 mb-5 bg-white"
					placeholder="이름"
					bind:value={name}
				/>
				<textarea
					class="textarea textarea-bordered mb-5 h-32 bg-white"
					placeholder="메시지"
					bind:value={content}
				/>
				<label class="label cursor-pointer mb-5 bg-white rounded-box border border-base-200 p-3">
					<span class="label-text">메시지 숨기기 (신랑 신부에게만 보입니다)</span>
					<input type="checkbox" class="checkbox" bind:checked={hide} />
				</label>
				<button
					class="btn"
					type="button"
					disabled={!(content && name) || postDisabled}
					on:click={doPost}
				>
					글쓰기
				</button>
			</div>
		{/if}
	</div>
</section>
