<script lang="ts">
	import Album from '$components/Album.svelte';
	import Intro from '$components/Intro.svelte';
	import Message from '$components/Message.svelte';
	import Location from '$components/Location.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<title>김신랑과 박신부의 결혼식에 초대합니다</title>
</svelte:head>

<Intro />
<div class="mt-7">
	<Message />
</div>
<div class="divider" />
<Location />
<div class="divider" />
<Album />
<div class="divider" />
<div class="mb-7">
	<Footer />
</div>
