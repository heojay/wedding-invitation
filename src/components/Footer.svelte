<script lang="ts">
	import { env } from '$env/dynamic/public';
	import copy from 'copy-to-clipboard';

	// Use Vercel image url after deploy
	// ex. https://wedding-invitation-heojay.vercel.app/images/main.jpg
	const previewImageUrl = '<FILL_PREIVEW_IMAGE_URL>';

	const initialize = () => {
		// eslint-disable-next-line no-undef
		Kakao.init(env.PUBLIC_KAKAO_JAVASCRIPT_KEY);
		// eslint-disable-next-line no-undef
		Kakao.Share.createDefaultButton({
			container: '#kakaotalk-sharing-btn',
			objectType: 'feed',
			content: {
				title: '김신랑과 김신부의 결혼식에 초대합니다',
				description: '2023년 01월 28일 토요일 11시 양재 엘블레스 다이아몬드홀',
				imageUrl: previewImageUrl,
				link: {
					mobileWebUrl: window.location.href,
					webUrl: window.location.href
				}
			},
			buttons: [
				{
					title: '청첩장 보러가기',
					link: {
						mobileWebUrl: window.location.href,
						webUrl: window.location.href
					}
				}
			]
		});
	};

	async function sharePage() {
		if (navigator.share) {
			navigator.share({
				title: document.title,
				url: window.location.href
			});
		} else {
			copy(window.location.href);
			alert('링크가 복사되었습니다.');
		}
	}
</script>

<svelte:head>
	<script
		src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js"
		integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/"
		crossorigin="anonymous"
		on:load={initialize}></script>
</svelte:head>

<section>
	<div class="text-center px-5 py-5">
		<a id="kakaotalk-sharing-btn" href="javascript:;" role="button" class="btn mx-2"
			>카카오로 공유하기</a
		>
		<button class="btn mx-2" on:click={sharePage}>링크로 공유하기</button>
	</div>
</section>
