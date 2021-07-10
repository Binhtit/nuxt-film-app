<template>
  <div class="container home__wrapper">
    <div class="row mb-2">
      <div class="col-md-9 p-0">
        <ParticularCarousel :movies-slide-arr="moviesSlideArr" />
      </div>
      <div class="col-md-3 p-0">
        <div class="home__movies-latest ml-2">
          <CommonListMoviesLatest />
        </div>
      </div>
    </div>

    <!-- --NOTE-- Current coding _filter logic to optimize performance. but will not be suitable when using paging in case large data. -->
    <div class="row home__filter bg-component py-2">
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
      <div class="col-md-3"></div>
    </div>

    <div class="row home__filter bg-component py-2">
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
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import { moviesTypes, moviesSlideArr } from '@/dummy_data/movies.js'
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
      moviesTypes,
      moviesSorted2d: [],
      moviesSorted3d: [],
    }
  },
  created() {},
  mounted() {
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
        ).filter((movie) => movie.type === codeType)
      } else {
        this.moviesSorted3d = this.getMoviesByCategory(
          MOVIE_CONSTANT.MOVIE_CATEGORY.MOVIE_3D
        ).filter((movie) => movie.type === codeType)
      }
    },
    getMoviesByCategory(code) {
      return this.moviesArr.filter((movie) => {
        return movie.categories === code
      })
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
      transition: 0.3s all ease;
      &:hover {
        color: var(--white);
      }
    }
  }
}
</style>
