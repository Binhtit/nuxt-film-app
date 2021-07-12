<template>
  <div class="container movies3d__wrapper">
    <div class="row movies3d__filter bg-component py-2">
      <CommonFilterMoviesNavbar
        :movies-types="moviesTypes"
        @moviesCodeType="getMoviesCodeType"
      />
    </div>

    <div class="row bg-component">
      <section class="col-md-9 p-0 p-3 movies3d__card-moves">
        <CommonListCardMovies :movies-arr="moviesSorted" />
      </section>
      <div class="movies3d__movies-latest scroll-dark col-md-3">
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
    const moviesArr = await $axios.$get('http://127.0.0.1:8000/api/movies/2')
    return { moviesArr }
  },
}
</script>
<style lang="scss">
.movies3d {
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
  &__card-moves {
    border-right: 2px solid var(--mainbackground);
  }
}
</style>
