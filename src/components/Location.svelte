<svelte:head>
    <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
</svelte:head>
<script lang="ts">
  import {onMount} from "svelte";

  onMount(() => {
    new daum.roughmap.Lander({
      "timestamp" : "1661051801591",
      "key" : "2bfnx",
      "mapHeight" : "400"
    }).render();
  })
</script>
<section class="text-gray-600">
    <div class="container px-5 py-12 mx-auto">
        <div class="text-center">
            <h1 class="mb-10 text-5xl font-bold">오시는 길</h1>
            <span id="daumRoughmapContainer1661051801591" class="root_daum_roughmap root_daum_roughmap_landing w-full"></span>
            <div class="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <div>
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">주소</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">OO시 OO구 OO동 OO웨딩홀</p>
                </div>
                <div>
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">지하철</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">[분당선] 서현역 4번 출구 도보 1분</p>
                </div>
                <div>
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">도보</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">발 닿는 대로 맘 가는 대로</p>
                </div>
        </div>
    </div>
</section>