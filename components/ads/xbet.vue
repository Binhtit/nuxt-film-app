<template>
  <div class="d-flex justify-content-center w-100">
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
    <a
      v-else
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
</template>
