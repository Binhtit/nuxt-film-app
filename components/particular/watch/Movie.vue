<template>
  <div class="mt-2 _watch">
    <!-- idea: truyền vào 1 prop chứa các link frame. khi click vào mỗi tập sẽ thay thế frame vào -->
    <iframe
      :src="frameSrc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="_eps-control mt-3">
      <div>
        <div class="col-md-12 d-flex p-0">
          <div
            class="_server col-md-3"
            :class="{ _active: !isServerTwo, '_server-active': !isServerTwo }"
            @click="changeServerTwo(false)"
          >
            <p class="text-center">Server VIP</p>
          </div>
          <div
            class="_server col-md-3"
            :class="{ _active: isServerTwo, '_server-active': isServerTwo }"
            @click="changeServerTwo(true)"
          >
            <p class="text-center">Server II</p>
          </div>
        </div>
        <div class="_eps">
          <div v-show="!isServerTwo" class="_ep">
            <div
              v-for="(ep, index) in eps"
              :key="index"
              class="_sub"
              @click="movieSrc = ep.link_1"
            >
              {{ ep.name }}
            </div>
          </div>
          <div v-show="isServerTwo" class="_ep">
            <div
              v-for="(ep, index) in eps"
              :key="index"
              class="_sub"
              @click="movieSrc = ep.link_2"
            >
              {{ ep.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eps: {
      type: Array,
      default() {},
    },
  },
  data() {
    return {
      isServerTwo: false,
      hideYoutobeLogo: '?modestbranding=1',
      movieSrc: 'https://www.youtube.com/embed/YKSNBIlM_bY',
    }
  },
  computed: {
    frameSrc() {
      return this.movieSrc + this.hideYoutobeLogo
    },
  },
  methods: {
    changeServerTwo(serverTwo) {
      if (serverTwo) {
        return (this.isServerTwo = true)
      }
      return (this.isServerTwo = false)
    },
  },
}
</script>
<style lang="scss">
._watch {
  width: 100%;
  iframe {
    width: 100%;
    height: 550px;
  }
  ._eps-control {
    ._server {
      color: var(--gray2);
      font-weight: bold;
      border-bottom: 5px solid;
      // margin-bottom: 16px;
      padding-top: 15px;
      // margin-left: 15px;
      cursor: pointer;
    }
    ._eps {
      min-height: 160px;
      background: var(--dark1);
      ._ep {
        color: var(--yellow1) !important;
        display: flex;
        padding: 15px;
        ._sub {
          background: var(--dark3);
          padding: 8px 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 5px;
          border-radius: 5px;
          cursor: pointer;

          &:hover {
            background: var(--yellow2);
            color: var(--dark3);
            transition: 0.3s all ease;
          }
        }
      }
    }
  }
  ._server-active {
    background: var(--dark1);
  }
}
</style>
