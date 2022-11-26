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
	import { page } from '$app/stores';

	let guestbooks;
	let isgroom = false;

	onMount(async () => {
		if ($page.url.searchParams.get('groom') === 'true') {
			isgroom = true;
		}
		const res = await fetch('/api/guestbook');
		guestbooks = (await res.json()).guestbooks.reverse().filter((guestbook) => !guestbook.hide);
	});
</script>

<svelte:head>
	<title>김신랑과 김신부의 결혼식에 초대합니다</title>
</svelte:head>

<Intro />
<div class="divider" />
<Saos once={true} animation={'fade-in 2.5s'} top={300}>
	<Message />
	<div class="divider" />
</Saos>
<Saos once={true} animation={'fade-in 2.5s'} top={300}>
	<Location />
	<div class="divider" />
</Saos>
<Saos once={true} animation={'fade-in 2.5s'} top={300}>
	<Album />
	<div class="divider" />
</Saos>
<Saos once={true} animation={'fade-in 2.5s'} top={300}>
	{#if !isgroom}
		<Account />
		<div class="divider" />
	{/if}
	<Guestbook {guestbooks} />
	<div class="divider" />
	<div class="mb-7">
		<Footer {isgroom} />
	</div>
</Saos>

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
