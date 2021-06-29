<template>
  <div class="container home__wrapper">
    <div class="row mb-2">
      <div class="col-md-9 p-0">
        <ParticularCarousel :movies-slide-arr="moviesSlideArr" />
      </div>
      <div class="col-md-3 p-0">
        <div class="home__list-movies-latest ml-2 scroll-dark">
          <CommonListMoviesLatest :movies-latest-arr="moviesLatestArr" />
        </div>
      </div>
    </div>

    <!-- --NOTE-- Current coding _filter logic to optimize performance. but will not be suitable when the data is large. -->
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
  moviesArr,
  moviesTypes,
  moviesSlideArr,
  moviesLatestArr,
} from '@/dummy_data/movies.js'
import { MOVIE_CONSTANT } from '~/assets/js/CONSTANT.js'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      moviesArr,
      moviesSlideArr,
      moviesLatestArr,
      moviesTypes,
      moviesSorted: moviesArr,
    }
  },
  computed: {},
  // watch() {},
  methods: {
    getMoviesCodeType(codeType) {
      if (codeType === MOVIE_CONSTANT.MOVIE_TYPE.MOVIE_TYPE_ALL) {
        this.moviesSorted = moviesArr
      } else {
        this.moviesSorted = moviesArr.filter((movie) => movie.type === codeType)
      }
    },
  },
}
</script>

<style lang="scss">
.home {
  &__list-movies-latest {
    height: 100%;
    max-height: 448px;
    background: var(--componentbackground);
    overflow-y: scroll;
  }
  &__filter {
    border-bottom: 2px solid var(--mainbackground);
    ._filter-btn {
      cursor: pointer;
      color: var(--gray2);
      transition: 0.3s ease;
      &._active {
        color: var(--white);
        font-weight: bold;
      }
      &:hover {
        color: var(--white);
      }
    }
  }
}
</style>
