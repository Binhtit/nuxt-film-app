<template>
  <div class="lixitt w-100 my-2">
    <div v-show="isRedirect" class="w-100">
      <div class="d-flex justify-content-center">
        <div class="toggle-btn text-white bg-warning" @click="openAds(false)">
          Đóng quảng cáo
        </div>
        <div v-if="!$device.isMobile" class="d-flex">
          <!-- e66 -->
          <a
            href="https://ee66.com/?inviteCode=0349653"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="require('@/assets/image/ee88-desktop.gif')" alt="ads" />
          </a>
          <!-- lixi -->
          <a
            href="https://lixi88vip.com/reg.shtml?id=5359840"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="require('@/assets/image/Banner_lixi-desktop.gif')"
              alt="ads"
            />
          </a>
        </div>
        <div v-else class="d-flex flex-column">
          <!-- e66 -->
          <a
            href="https://ee66.com/?inviteCode=0349653"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="require('@/assets/image/ee88-mb.gif')" alt="ads" />
          </a>
          <!-- lixi -->
          <a
            href="https://lixi88vip.com/reg.shtml?id=5359840"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="require('@/assets/image/Banner_14062021_320x50.gif')"
              alt="ads"
            />
          </a>
        </div>
      </div>
    </div>
    <span
      v-show="!isRedirect"
      class="toggle-btn text-white bg-warning _open"
      @click="openAds(true)"
    >
      Mở quảng cáo
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
  computed: {
    isRedirect() {
      return this.$store.state.isRedirect
    },
  },
  methods: {
    openAds(value) {
      this.$store.dispatch('isRedirect', value)
    },
  },
}
</script>
<style lang="scss" scoped>
.lixitt {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99;
  .toggle-btn {
    position: absolute;
    font-size: 12px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    top: -35%;
    cursor: pointer;
    &._open {
      transform: translate(0%, -65%);
      font-size: 14px;
    }
  }
}
</style>
