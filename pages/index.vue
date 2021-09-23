<template>
  <div class="container home__wrapper" :class="{ _ismobile: $device.isMobile }">
    <div class="row">
      <AdsXbet />
      <CommonScrollUp />
      <div class="col-lg-9 p-0">
        <ParticularHomeCarousel
          v-if="!$device.isMobile"
          :movies-slide-arr="moviesSlideArr"
        />
      </div>
      <div class="col-lg-3 p-0">
        <div v-if="!$device.isMobile" class="home__movies-latest ml-2">
          <CommonListMoviesLatest />
        </div>
      </div>
    </div>
    <!-- <div class="row mb-3">
      <div v-if="!$device.isMobile" class="col-12">
        <div
          class="fb-like"
          data-share="true"
          data-width="550"
          data-height="27"
          data-show-faces="true"
        ></div>
      </div>
      <div v-else class="col-12">
        <div
          class="fb-like"
          data-share="true"
          data-width="350"
          data-show-faces="true"
        ></div>
      </div>
    </div> -->
    <!-- --NOTE-- Current coding _filter logic to optimize performance. but will not be suitable when using paging in case large data. -->
    <div class="row home__filter bg-component py-2">
      <h5 v-if="$device.isMobile" class="col-12 text-center text-warning">
        Phim 3D mới cập nhật
      </h5>
      <CommonFilterMoviesNavbar
        :movies-types="moviesTypes"
        @moviesCodeType="getMoviesCodeType($event, '3d')"
      >
        <template slot="category"> 3D </template>
      </CommonFilterMoviesNavbar>
    </div>
    <div class="row bg-component">
      <section class="col-md-9 p-0 p-3">
        <CommonListCardMovies :movies-arr="moviesSorted3d" />
      </section>
      <div
        class="col-md-3 pt-3"
        :class="{ '_bg-fb _height-fb scroll-yellow--small': !$device.isMobile }"
      >
        <AdsAdmicro />
        <div
          v-if="!$device.isMobile"
          class="fb-comments"
          data-href="https://hhtq.tv/"
          data-order-by="reverse_time"
          data-width="100%"
          data-numposts="5"
        ></div>
      </div>
    </div>

    <div class="row home__filter bg-component py-2">
      <h5 v-if="$device.isMobile" class="col-12 text-center text-warning">
        Phim 2D mới cập nhật
      </h5>
      <CommonFilterMoviesNavbar
        :movies-types="moviesTypes"
        @moviesCodeType="getMoviesCodeType($event, '2d')"
      >
        <template slot="category"> 2D </template>
      </CommonFilterMoviesNavbar>
    </div>
    <div class="row bg-component">
      <section class="col-md-9 p-0 p-3">
        <CommonListCardMovies :movies-arr="moviesSorted2d" />
      </section>
      <div
        class="pt-3"
        :class="{
          '_bg-fb col-md-12': $device.isMobile,
          'col-md-3': !$device.isMobile,
        }"
      >
        <div
          v-if="$device.isMobile"
          class="fb-comments"
          data-href="https://hhtq.tv/"
          data-order-by="reverse_time"
          data-width="100%"
          data-numposts="5"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import facebookConfig from '@/mixins/facebookConfig'
import { moviesTypes } from '@/commonjs/movies.js'
import { MOVIE_CONSTANT } from '@/assets/js/CONSTANT.js'
import commonMixin from '~/mixins/commonMixin.js'

export default {
  name: 'Home',
  components: {},
  mixins: [commonMixin, facebookConfig],
  async asyncData({ $axios }) {
    const moviesArr = await $axios.$get('/api/home')
    return { moviesArr }
  },
  data() {
    return {
      moviesTypes,
      moviesSorted2d: [],
      moviesSorted3d: [],
      // typeMovie: String,
      // episodes: String,
      // limitEpNum: 10,
      // epNumLoadMore: 10,
      // noMoreEp: false,
    }
  },
  computed: {
    moviesSlideArr() {
      return this.moviesArr.top_5_newest_films
    },
    sink() {
      return this.$store.state.sink
    },
  },
  created() {},
  mounted() {
    // for header use
    this.$store.commit('addAllMoviesArr', this.moviesArr.all_film)
    localStorage.setItem(
      'allMoviesArr',
      JSON.stringify(this.moviesArr.all_film)
    )
    this.moviesSorted2d = this.getMoviesByCategory(
      MOVIE_CONSTANT.MOVIE_CATEGORY.MOVIE_2D
    )
    this.moviesSorted3d = this.getMoviesByCategory(
      MOVIE_CONSTANT.MOVIE_CATEGORY.MOVIE_3D
    )
  },
  methods: {
    getMoviesCodeType(codeType, category) {
      if (codeType === MOVIE_CONSTANT.MOVIE_TYPE.MOVIE_TYPE_ALL) {
        if (category === '2d') {
          this.moviesSorted2d = this.getMoviesByCategory(
            MOVIE_CONSTANT.MOVIE_CATEGORY.MOVIE_2D
          )
        } else {
          this.moviesSorted3d = this.getMoviesByCategory(
            MOVIE_CONSTANT.MOVIE_CATEGORY.MOVIE_3D
          )
        }
      } else if (category === '2d') {
        this.moviesSorted2d = this.getMoviesByCategory(
          MOVIE_CONSTANT.MOVIE_CATEGORY.MOVIE_2D
        ).filter((movie) => movie.type_id === parseInt(codeType))
      } else {
        this.moviesSorted3d = this.getMoviesByCategory(
          MOVIE_CONSTANT.MOVIE_CATEGORY.MOVIE_3D
        ).filter((movie) => movie.type_id === parseInt(codeType))
      }
    },
    getMoviesByCategory(code) {
      return this.moviesArr.top_40_newest_eps.filter((movie) => {
        return movie.category_id === code
      })
    },
    // async loadmore(value) {
    //   if (value.loadmore) {
    //     console.log('api/home/' + value.epi + '/' + this.epNumLoadMore)
    //     debugger
    //     this.epNumLoadMore = this.epNumLoadMore + this.limitEpNum
    //     const moviesArr = await this.$axios.$get(
    //       `api/home/${value.epi}/${this.epNumLoadMore}`
    //     )
    //     if (moviesArr.length === 0 && !moviesArr) {
    //       this.noMoreEp = true
    //     }
    //     if (value.epi === MOVIE_CONSTANT.MOVIE_CATEGORY.MOVIE_2D) {
    //       this.moviesSorted2d.push(moviesArr)
    //     } else {
    //       this.moviesSorted3d.push(moviesArr)
    //     }
    //   }
    // },
  },
}
</script>

<style lang="scss">
.home {
  &__movies-latest {
    background: var(--componentbackground);
  }
  &__filter {
    border-bottom: 2px solid var(--mainbackground);
  }
  &__wrapper {
    ._bg-fb {
      background: #6c757d;
    }
    ._height-fb {
      max-height: 1700px;
      overflow-y: scroll;
    }
  }
}
</style>
