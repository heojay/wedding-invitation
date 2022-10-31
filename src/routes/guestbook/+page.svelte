<script lang="ts">
	import { onMount } from 'svelte';

	let guestbooks;
	let name = '';
	let content = '';

	onMount(async () => {
		const res = await fetch('/api/guestbook');
		guestbooks = (await res.json()).guestbooks.reverse();
	});

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
		guestbooks = [{ name, content }, ...guestbooks];

		alert('등록됐습니다.');
		name = '';
		content = '';
		return;
	}
</script>

<svelte:head>
	<title>방명록</title>
</svelte:head>

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
			<input type="text" class="input input-bordered max-w-xs mb-5 bg-white" bind:value={name} />
			<label class="label">
				<span class="text-xl font-bold label-text">하고 싶은 말</span>
			</label>
			<textarea class="textarea textarea-bordered mb-5 bg-white" bind:value={content} />
			<button class="text-xl btn" type="button" disabled={!(content && name)} on:click={doPost}>
				글쓰기
			</button>
		</div>
	</div>
	{#if guestbooks}
		<div class="mb-10">
			{#each guestbooks as guestbook}
				<div class="container px-5 py-2 mx-auto">
					<div class="flex flex-col w-full p-8 mx-auto bg-white rounded-lg shadow-md">
						<div class="mt-2">
							<p class="text-2xl font-bold text-gray-700">{guestbook.name}</p>
							<p class="mt-2 text-gray-600s">{guestbook.content}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="text-center">
			<div role="status">
				<svg
					class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
					viewBox="0 0 100 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
						fill="currentColor"
					/>
					<path
						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
						fill="currentFill"
					/>
				</svg>
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	{/if}
</section>
