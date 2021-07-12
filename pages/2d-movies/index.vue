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
import cardMoviesController from '@/mixins/cardMoviesController.js'

export default {
  name: 'Movies3d',
  mixins: [cardMoviesController],

  async asyncData({ $axios }) {
    const moviesArr = await $axios.$get('http://127.0.0.1:8000/api/movies/1')
    return { moviesArr }
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
