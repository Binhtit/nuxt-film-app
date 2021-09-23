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
      <a
        v-if="!$device.isMobile"
        href="https://refpa.top/L?tag=d_1154767m_97c__[]general[]_d56818_l54711_catfish&site=1154767&ad=97&r=vi/allgamesentrance/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :src="require('@/assets/image/Wheel_of_Fortune_desktop.gif')"
          alt="ads"
        />
      </a>
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
      <a
        href="https://refpa.top/L?tag=d_1154767m_97c__[]general[]_d56818_l54711_catfish&site=1154767&ad=97&r=vi/allgamesentrance/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :src="require('@/assets/image/Wheel_of_Fortune_300x50.gif')"
          alt="ads"
        />
      </a>
    </div>
  </div>
</template>
