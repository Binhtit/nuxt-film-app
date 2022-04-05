<template>
  <div class="justify-content-center w-100 my-2">
    <div
      v-if="!$device.isMobileOrTablet"
      class="d-flex flex-column align-items-center"
    >
      <a
        href="https://daulavng.onelink.me/5n3N/hhtqtop728x90"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="require('@/assets/image/dau-la_pc.gif')" alt="ads" />
      </a>
    </div>
    <div v-else class="d-flex flex-column align-items-center">
      <a
        href="https://daulavng.onelink.me/5n3N/hhtqtop320x50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="require('@/assets/image/dau-la_mb.gif')" alt="ads" />
      </a>
    </div>
  </div>
</template>
