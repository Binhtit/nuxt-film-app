<template>
  <div
    class="container movies3d__wrapper"
    :class="{ _ismobile: $device.isMobile }"
  >
    <div class="row movies3d__filter bg-component py-2">
      <CommonScrollUp />
      <AdsXbet />
      <h5
        v-if="$device.isMobile"
        class="col-12 text-muted text-center font-weight-bold"
      >
        Phim 3D
      </h5>
      <CommonFilterMoviesNavbar
        :movies-types="moviesTypes"
        @moviesCodeType="getMoviesCodeType"
      >
        <template slot="category"> 3D </template>
      </CommonFilterMoviesNavbar>
    </div>

    <div class="row bg-component">
      <section class="col-md-9 p-0 p-3 movies3d__card-moves">
        <CommonListCardMovies :movies-arr="moviesSorted" />
      </section>
      <div class="movies3d__movies-latest scroll-dark col-md-3 pt-2">
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
    const moviesArr = await $axios.$get('/api/movies/2')
    return { moviesArr }
  },
  data() {
    return {
      moviesSorted: [],
    }
  },
  head() {
    return {
      title: 'Phim hoạt hình 3D',
    }
  },
}
</script>
<style lang="scss" scoped>
.movies3d {
  &__wrapper {
    border-top: 2px solid var(--mainbackground);
  }
  &__filter {
    border-bottom: 2px solid var(--mainbackground);
  }
  &__card-moves {
    border-right: 2px solid var(--mainbackground);
  }
}
</style>
