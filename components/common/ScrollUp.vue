<template>
  <div
    class="scroll-up"
    :class="{ _smooth: isScroll, _ismobile: $device.isMobile }"
    @click="scrollToComponent('__layout')"
  >
    <i class="fas fa-chevron-circle-up"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScroll: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToComponent(component) {
      if (!component) return false
      return window.scrollTo({
        top: document.querySelector(`#${component}`).offsetTop,
        behavior: 'smooth',
      })
    },
    handleScroll(event) {
      if (window.scrollY > 100) {
        return (this.isScroll = true)
      }
      return (this.isScroll = false)
    },
  },
}
</script>

<style lang="scss">
@keyframes animated-scroll {
  0% {
    opacity: 0;
    right: 45px;
    bottom: 65px;
    transform: translateY(10px);
  }
  100% {
    right: 45px;
    bottom: 65px;
    opacity: 0.9;
    transform: translateY(0);
  }
}
.scroll-up {
  font-size: 50px;
  position: fixed;
  right: 45px;
  bottom: 65px;
  color: var(--yellow1) !important;
  z-index: 1;
  opacity: 0;
  &._smooth {
    animation: animated-scroll 1.2s ease;
    opacity: 0.9;
  }
  &._ismobile {
    font-size: 35px;
  }
  i {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0 -3px 0 inset;
  }
}
</style>
