<script lang="ts">
	import Album from '$components/Album.svelte';
	import Intro from '$components/Intro.svelte';
	import Message from '$components/Message.svelte';
	import Location from '$components/Location.svelte';
	import Guestbook from '$components/Guestbook.svelte';
	import Footer from '$components/Footer.svelte';
	import Account from '$components/Account.svelte';
	import Saos from 'saos';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Memory from '$components/Memory.svelte';

	let guestbooks;
	$: isMemory = false;

	onMount(async () => {
		const res = await fetch('/api/guestbook');
		guestbooks = (await res.json()).guestbooks.reverse().filter((guestbook) => !guestbook.hide);
	});
</script>

<svelte:head>
	<title>허신랑과 정신부의 결혼식에 초대합니다</title>
</svelte:head>

{#if !isMemory}
	<div in:fade={{ duration: 2500 }} out:fade>
		<Intro bind:isMemory />
		<div class="divider" />
		<Saos once={true} animation={'fade-in 1.5s'} top={250}>
			<Message />
			<div class="divider" />
		</Saos>
		<Saos once={true} animation={'fade-in 1.5s'} top={250}>
			<Location />
			<div class="divider" />
		</Saos>
		<Saos once={true} animation={'fade-in 1.5s'} top={250}>
			<Album />
			<div class="divider" />
		</Saos>
		<Saos once={true} animation={'fade-in 1.5s'} top={250}>
			<Account />
			<div class="divider" />
			<Guestbook {guestbooks} />
			<div class="divider" />
			<div class="mb-7">
				<Footer />
			</div>
		</Saos>
	</div>
{:else}
	<div in:fade={{ duration: 2500 }} out:fade>
		<Memory bind:isMemory />
	</div>
{/if}

<style>
	@-webkit-keyframes -global-fade-in {
		0% {
			-webkit-transform: translateY(10px);
			transform: translateY(10px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
