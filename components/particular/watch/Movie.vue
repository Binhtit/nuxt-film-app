<template>
  <div class="mt-2 _watch">
    <!-- idea: truyền vào 1 prop chứa các link frame. khi click vào mỗi tập sẽ thay thế frame vào -->
    <div class="_wrap">
      <iframe
        :src="frameSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="_eps-control mt-3">
      <div>
        <div class="col-md-12 d-flex p-0">
          <div
            class="_server col-md-3"
            :class="{ '_active _server-active': !isServerTwo }"
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
              :class="{ _active: linkActive == index }"
              @click="selectLink(ep.link_1, index)"
            >
              {{ ep.name }}
            </div>
          </div>
          <div v-show="isServerTwo" class="_ep">
            <div
              v-for="(ep, index) in eps"
              :key="index"
              class="_sub"
              :class="{ _active: linkActive == index }"
              @click="selectLink(ep.link_2, index)"
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
    film: {
      type: [Object, Array],
      default() {},
    },
  },
  data() {
    return {
      isServerTwo: false,
      hideYoutobeLogo: '?modestbranding=1',
      // movieSrc: 'https://www.youtube.com/embed/YKSNBIlM_bY',
      // ep: '',
      link: null,
      linkActive: 0,
    }
  },
  computed: {
    frameSrc() {
      return this.movieSrc + this.hideYoutobeLogo
    },
    movieSrc() {
      if (this.link != null) {
        return this.link
      }
      return this.eps[0].link_1
    },
    // movieSrc() {
    //   debugger
    //   const ep = this.film.id
    //   return this.eps.find((element) => {
    //     // debugger
    //     if (element.film_id === ep) {
    //       return element.link_1
    //     }
    //     return false
    //   })
    //   // return 'https://www.youtube.com/embed/YKSNBIlM_bY'
    // },
  },
  // mounted(ctx) {
  //   this.ep = this.$route.query.tap
  // },
  methods: {
    changeServerTwo(serverTwo) {
      if (serverTwo) {
        return (this.isServerTwo = true)
      }
      return (this.isServerTwo = false)
    },
    selectLink(link, index) {
      this.link = link
      this.linkActive = index
    },
  },
}
</script>
<style lang="scss">
._watch {
  ._wrap {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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
      ._active {
        background: #ffc107 !important;
        color: #335666 !important;
      }
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
