<template>
  <div
    class="container movies2d__wrapper"
    :class="{ _ismobile: $device.isMobile }"
  >
    <div class="row movies2d__filter bg-component py-2">
      <CommonScrollUp />
      <AdsXbet />
      <h5
        v-if="$device.isMobile"
        class="col-12 text-muted text-center font-weight-bold"
      >
        Phim 2D
      </h5>
      <CommonFilterMoviesNavbar
        :movies-types="moviesTypes"
        @moviesCodeType="getMoviesCodeType"
      >
        <template slot="category"> 2D </template>
      </CommonFilterMoviesNavbar>
    </div>

    <div class="row bg-component">
      <section class="col-md-9 p-0 p-3 movies2d__card-moves">
        <CommonListCardMovies :movies-arr="moviesSorted" />
      </section>
      <div class="movies2d__movies-latest scroll-dark col-md-3 pt-2">
        <AdsAdmicro />
        <CommonListMoviesLatest :movies-latest-arr="moviesLatestArr" />
      </div>
    </div>
  </div>
</template>

<script>
import cardMoviesController from '@/mixins/cardMoviesController.js'
import filterMovies2d3dpage from '@/mixins/filterMovies2d3dpage.js'
import commonMixin from '~/mixins/commonMixin.js'

export default {
  name: 'Movies3d',
  mixins: [commonMixin, cardMoviesController, filterMovies2d3dpage],

  async asyncData({ $axios }) {
    const moviesArr = await $axios.$get('/api/movies/1')
    return { moviesArr }
  },
  data() {
    return {
      moviesSorted: [],
    }
  },
  head() {
    return {
      title: 'Phim hoạt hình 2D',
    }
  },
  mounted() {
    ;(function (w, d, a) {
      // debugger
      if (w.ccnads) {
        // eslint-disable-next-line no-undef
        return ccnads(a)
      }
      if (w.ccnAdsQueue) {
        return w.ccnAdsQueue.push(a)
      }
      w.ccnAdsQueue = []
      w.ccnAdsQueue.push(a)
      // eslint-disable-next-line no-var
      var s = d.createElement('script')
      s.async = true
      s.src = 'https://static.adconnect.vn/main.js'
      d.head.appendChild(s)
    })(window, document, {
      id: 'ccadnet_362_599',
      // eslint-disable-next-line object-shorthand
      fallback: function () {},
    })
  },
}
</script>

<style lang="scss" scoped>
.movies2d {
  &__wrapper {
    padding-top: 65px;
    border-top: 2px solid var(--mainbackground);
    &._ismobile {
      padding-top: 104px;
    }
  }
  &__filter {
    border-bottom: 2px solid var(--mainbackground);
  }
  &__card-moves {
    border-right: 2px solid var(--mainbackground);
  }
}
</style>
