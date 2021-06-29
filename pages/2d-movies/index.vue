<template>
  <div class="container movies2d__wrapper">
    <div class="row movies2d__filter bg-component py-2">
      <CommonFilterMoviesNavbar
        :movies-types="moviesTypes"
        @moviesCodeType="getMoviesCodeType"
      />
    </div>

    <div class="row bg-component">
      <section class="col-md-9 p-0 p-3 movies2d__card-moves">
        <CommonListCardMovies :movies-arr="moviesSorted" />
      </section>
      <div class="movies2d__movies-latest scroll-dark col-md-3">
        <CommonListMoviesLatest :movies-latest-arr="moviesLatestArr" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  moviesArr2d,
  moviesTypes,
  moviesSlideArr,
  moviesLatestArr,
} from '@/dummy_data/movies.js'
import { MOVIE_CONSTANT } from '~/assets/js/CONSTANT.js'
export default {
  name: 'Movies2d',
  data() {
    return {
      moviesArr2d,
      moviesSlideArr,
      moviesLatestArr,
      moviesTypes,
      moviesSorted: moviesArr2d,
    }
  },
  methods: {
    getMoviesCodeType(codeType) {
      if (codeType === MOVIE_CONSTANT.MOVIE_TYPE.MOVIE_TYPE_ALL) {
        this.moviesSorted = moviesArr2d
      } else {
        this.moviesSorted = moviesArr2d.filter(
          (movie) => movie.type === codeType
        )
      }
    },
  },
}
</script>

<style lang="scss">
.movies2d {
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
  &__card-moves {
    border-right: 2px solid var(--mainbackground);
  }
}
</style>
