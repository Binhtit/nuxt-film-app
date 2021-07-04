<template>
  <div class="container home__wrapper">
    <div class="row mb-2">
      <div class="col-md-9 p-0">
        <ParticularCarousel :movies-slide-arr="moviesSlideArr" />
      </div>
      <div class="col-md-3 p-0">
        <div class="home__movies-latest ml-2">
          <CommonListMoviesLatest :movies-latest-arr="moviesLatestArr" />
        </div>
      </div>
    </div>

    <!-- --NOTE-- Current coding _filter logic to optimize performance. but will not be suitable when using paging in case large data. -->
    <div class="row home__filter bg-component py-2">
      <CommonFilterMoviesNavbar
        :movies-types="moviesTypes"
        @moviesCodeType="getMoviesCodeType"
      />
    </div>

    <div class="row bg-component">
      <section class="col-md-9 p-0 p-3">
        <CommonListCardMovies :movies-arr="moviesSorted" />
      </section>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import {
  moviesTypes,
  moviesSlideArr,
  moviesLatestArr,
} from '@/dummy_data/movies.js'
import { MOVIE_CONSTANT } from '~/assets/js/CONSTANT.js'
export default {
  name: 'Home',
  components: {},
  async asyncData({ $axios }) {
    const moviesArr = await $axios.$get(
      'https://nuxt-movies-app-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'
    )
    return { moviesArr }
  },
  data() {
    return {
      moviesSlideArr,
      moviesLatestArr,
      moviesTypes,
      moviesSorted: [],
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.moviesSorted = this.moviesArr
  },
  // watch() {},
  methods: {
    getMoviesCodeType(codeType) {
      if (codeType === MOVIE_CONSTANT.MOVIE_TYPE.MOVIE_TYPE_ALL) {
        this.moviesSorted = this.moviesArr
      } else {
        this.moviesSorted = this.moviesArr.filter(
          (movie) => movie.type === codeType
        )
      }
    },
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
    ._filter-btn {
      cursor: pointer;
      color: var(--gray2);
      transition: 0.3s ease;
      &:hover {
        color: var(--white);
      }
    }
  }
}
</style>
