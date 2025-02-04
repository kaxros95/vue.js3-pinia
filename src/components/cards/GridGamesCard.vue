<template>
  <article
    class="flex flex-col flex-no-wrap cursor-default select-none min-w-[50px]"
    data-test-id="game-tile"
  >
    <a
      :class="['delay-300 rounded overflow-hidden', relativeClass]"
      href="#"
      data-test-id="game-thumb"
      v-on="thumbEvents"
    >
      <figure
        class="m-unset w-full rounded hover:opacity-50 visual-layer"
        :class="[skeletonClass, hoveredClass, visualLayerDesktopClasses]"
        data-test-id="game-thumb-visual-layer"
      >
        <img
          :class="['object-cover pointer-events-none image']"
          :src="backgroundImg"
          :alt="gameTitle"
          loading="lazy"
          data-test-id="image"
          @load="loadSuccess"
          @error="loadError"
        />
      </figure>
    </a>
    <a class="h-[30px] mt-s text-start" href="#" data-test-id="game-info">
      <h4
        data-test-id="game-info-title"
        class="text-white text-xs truncate-line m-0"
      >
        {{ gameTitle }}
      </h4>
      <h4
        data-test-id="game-info-title"
        class="text-white text-xs truncate-line m-0"
      >
        {{ gameType }}
      </h4>
    </a>
  </article>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from "vue";
import { isMobileDevice } from "@/functions/isMobile";

const game = defineProps<{
  title: string;
  gameType: string;
  imageUrl: string;
}>();

const isMobile = isMobileDevice();
const isThumbHovered = ref(false);

const gameTitle = computed(() => game.title ?? undefined);
const gameType = computed(() => game.gameType ?? undefined);
const backgroundImg = computed(() => game.imageUrl ?? undefined);

const skeletonClass = ref(
  "before:content-empty before:absolute before:inset-x-zero before:inset-y-zero before:bg-black-pearl skeleton"
);
const hoveredClass = computed(() =>
  !isMobile && isThumbHovered.value ? "scale-110" : ""
);

const relativeClass = computed(() => (!isMobile ? "relative " : ""));

const visualLayerDesktopClasses = computed(() =>
  isMobile
    ? ""
    : "will-change-transform origin-center transition-transform duration-slower"
);

const thumbEvents = computed(() => ({
  click(e: Event) {
    e.preventDefault();
  },
  ...(!isMobile && {
    mouseenter() {
      isThumbHovered.value = true;
    },
    mouseleave() {
      isThumbHovered.value = false;
    },
  }),
}));

function loadSuccess() {
  skeletonClass.value = "";
}

function loadError() {
  skeletonClass.value = "skeleton-error bg-black-pearl";
}
</script>

<style lang="scss" scoped>
.visual-layer {
  @supports not (aspect-ratio: auto) {
    position: relative;
    height: 0;
    padding-bottom: 1 / 3 * 100%;
    overflow: hidden;
  }

  @supports (aspect-ratio: auto) {
    aspect-ratio: 16 / 9;
  }
  .image {
    @supports not (aspect-ratio: auto) {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    @supports (aspect-ratio: auto) {
      aspect-ratio: 16/9;
      width: 100%;
    }
  }
}

.skeleton-error .image {
  width: unset;
}

.play-icon {
  @at-root {
    .fade-enter-active &,
    .fade-leave-active & {
      transition: transform transition(), opacity transition();
    }

    .fade-enter-from &,
    .fade-leave-to & {
      opacity: 0;
      transform: scale(1.5);
    }

    .fade-enter-to &,
    .fade-leave-from & {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
