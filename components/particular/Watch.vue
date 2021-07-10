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
        <div class="_server">
          <p>Server 1</p>
        </div>
        <div class="_ep">
          <div
            class="_sub"
            @click="movieSrc = 'https://www.youtube.com/embed/yaLACYdmsgE'"
          >
            1
          </div>
          <div
            class="_sub"
            @click="movieSrc = 'https://www.youtube.com/embed/YKSNBIlM_bY'"
          >
            2
          </div>
          <div class="_sub">3</div>
        </div>
      </div>
      <div class="mt-4">
        <div class="_server">
          <p>Server 2</p>
        </div>
        <div class="_ep">
          <div class="_sub">1</div>
          <div class="_sub">2</div>
          <div class="_sub">3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideYoutobeLogo: '?modestbranding=1',
      movieSrc: 'https://www.youtube.com/embed/YKSNBIlM_bY',
    }
  },
  computed: {
    frameSrc() {
      return this.movieSrc + this.hideYoutobeLogo
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
    color: var(--yellow1) !important;
    ._server {
      font-weight: bold;
    }
    ._ep {
      display: flex;
      ._sub {
        background: var(--dark3);
        height: 40px;
        width: 53px;
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
</style>
