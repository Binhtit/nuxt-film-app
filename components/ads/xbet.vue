<template>
  <div class="d-flex justify-content-center w-100 my-2">
    <div v-if="!$device.isMobile" class="d-flex flex-column align-items-center">
      <!-- 123b -->
      <a
        href="https://123b.org/?inviteCode=79748668&regAgentJumpFlag=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="require('@/assets/image/123B-desktop.gif')" alt="ads" />
      </a>
      <!-- xbet -->
    </div>
    <div v-else class="d-flex flex-column align-items-center">
      <!-- 123b -->
      <a
        href="https://123b.org/?inviteCode=79748668&regAgentJumpFlag=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="require('@/assets/image/123b-mb.gif')" alt="ads" />
      </a>
      <!-- xbet -->
    </div>
  </div>
</template>
