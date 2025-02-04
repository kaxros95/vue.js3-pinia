<template>
  <div
    :class="[
      'relative max-w-[1440px] mx-auto my-0',
      { 'fixed inset-0 h-screen z-10': isFullScreen },
    ]"
    :style="{ minHeight: minHeight, marginTop: marginTop }"
  >
    <VirtualsGamePlayMobile
      v-if="isMobile"
      :url="url"
      :quick-deposit-url="quickDepositUrl"
      :game-title="game.title"
      :enable-quick-deposit="enableQuickDeposit"
      :show-quick-deposit-modal="showQuickDepositModal"
      :close-game-handler="onCloseGame"
      :quick-deposit-handler="toggleQuickDepositModal"
    />
    <div v-else class="pt-1">
      <header class="flex items-center h-12 bg-gray-800 px-4">
        <div class="flex-1">
          <h1 class="text-white text-lg font-bold text-left">
            {{ gameName }}
          </h1>
        </div>
        <div class="flex items-center space-x-3">
          <button
            class="bg-transparent text-white hover:scale-110"
            @click="onToggleFullScreen"
          >
            <FiltersIcon />
          </button>
          <button
            class="bg-transparent text-white hover:scale-110"
            @click="onCloseGame"
          >
            <CloseIcon />
          </button>
        </div>
      </header>
      <div class="relative">
        <div class="relative pt-[56.25%]">
          <iframe class="absolute top-0 left-0 w-full h-full" :src="url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CloseIcon from "@/assets/svgs/CloseIcon.vue";
import { isMobileDevice } from "@/functions/isMobile";
import FiltersIcon from "@/assets/svgs/FiltersIcon.vue";
import { useSelectedGameStore } from "@/store/useSelectedGameStore";

const onCloseGame = () => {
  window.history.back();
};

const isFullScreen = ref(false);
const isMobile = isMobileDevice();

const { gameName } = useSelectedGameStore();
const url =
  "https://gaming-launch-gr.betano.com/Game/Launch/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkIjoiSDRzSUFBQUFBQUFBQTEyUmIydkNNQkRHdjB2QWQ1Mng5ZDhzbEwyWUlodXlpWnZ2QmhMYmF3Mm1TYmtrMWlKKzl5V3RReHdFa25zdTk3dm5rZ3RaTVN2VHd4WUZpY25CbUVySGxHcWorSm1YVFBZRnNPcXBZQ1dYUlQ5VkpVMFZBdVdTR3pvZXpNSVhsNEczZWVMUFAzWXdpQ2I2eU9XT1owazA2dUpLc0Fhd1ZjYkRZVGlkUnRNdUlaZ3NMQ3NnS2JBVFVtV2x3U1paYm02eFJRU1pOc2xpZTFPRTJ1K2IzWGF6U2xxZnZTSHJSYmxiZFYzMzc0NExkTktKbzdGTWFIZjBGdjErOTFPcURKTGNTaEtRbFVjK3p2NmZSdjlZdENWUlY3WDBVMmNrRHNQbnlTd2dhMVFubmdHMjBpZ2dIOHJ3dlBtVS90cXJVQnBJbkx0NkNNamliSkROd1RBdU5Ja3YxeGJsbnJiN0E4RE9pZXV3RnN6a0Nrc0hETWc3T3pHZElxK015N3M2YVlVSXlKZHBCT2dEd0lQYWtYem5iM1VFNlduWFg2VWFMeXJrQVFBQSIsIm5iZiI6MTczODA1NzMwNiwiZXhwIjoxNzM4MDU4MjA2LCJpYXQiOjE3MzgwNTczMDZ9.bZT_RQWubGMhMSvQ8Lt7DkBl3EBa-0goN43X5eaA8Hw?kaizenAllowNavigate=1";
</script>
