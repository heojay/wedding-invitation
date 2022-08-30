<script lang="ts">
	let name = '';
	let content = '';
	let result = null;

	async function doPost() {
		const res = await fetch('/guestbook', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name,
				content: content
			})
		});

		const json = await res.json();
		result = JSON.stringify(json);
	}
</script>

<section class="bg-base-100">
	<div class="container px-5 py-12 mx-auto">
		<h1 class="mb-10 text-5xl font-bold">방명록</h1>
		<div class="form-control">
			<label class="label">
				<span class="label-text">이름</span>
			</label>
			<input type="text" class="input input-bordered w-full max-w-xs mb-5" bind:value={name} />
			<label class="label">
				<span class="label-text">하고 싶은 말</span>
			</label>
			<textarea class="textarea textarea-bordered mb-5" bind:value={content} />
			<button class="btn" type="button" disabled={!(content && name)} on:click={doPost}>
				글쓰기
			</button>
		</div>
	</div>
</section>
