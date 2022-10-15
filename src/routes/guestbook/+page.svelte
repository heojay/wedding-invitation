<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

	let name = '';
	let content = '';

	async function doPost() {
		const res = await fetch('/api/guestbook', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				content
			})
		});

		if (!res.ok) {
			console.log(res);
			alert('메시지 전송에 실패했습니다.');
			return;
		}
		data.guestbooks = [...data.guestbooks, { name, content }];

		alert('등록됐습니다.');
		name = '';
		content = '';
		return;
	}
</script>

<section class="bg-base-100 my-5">
	<div class="px-5 py-5">
		<button class="btn gap-2" onclick="window.location.href='/'">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="3"
				stroke="currentColor"><path d="M15 18l-6-6 6-6" /></svg
			>
			청첩장 보러가기
		</button>
	</div>
	<div class="container px-5 py-5 mx-auto">
		<h1 class="mb-10 text-5xl font-bold">방명록</h1>
		<div class="form-control">
			<label class="label">
				<span class="text-xl font-bold label-text">이름</span>
			</label>
			<input type="text" class="input input-bordered w-full max-w-xs mb-5" bind:value={name} />
			<label class="label">
				<span class="text-xl font-bold label-text">하고 싶은 말</span>
			</label>
			<textarea class="textarea textarea-bordered mb-5" bind:value={content} />
			<button class="text-xl btn" type="button" disabled={!(content && name)} on:click={doPost}>
				글쓰기
			</button>
		</div>
	</div>
	{#if data.guestbooks}
		<div class="mb-10">
			{#each data.guestbooks as guestbook}
				<div class="container px-5 py-2 mx-auto">
					<div class="flex flex-col w-full p-8 mx-auto bg-white rounded-lg shadow-md">
						<div class="mt-2">
							<p class="text-2xl font-bold text-gray-700">{guestbook.name}</p>
							<p class="mt-2 text-gray-600">{guestbook.content}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
