import { MOVIE_CONSTANT } from '@/assets/js/CONSTANT.js'

export default {
  methods: {
    getMoviesCodeType(codeType, category) {
      const moviesByCategory = this.moviesArr
      if (codeType === MOVIE_CONSTANT.MOVIE_TYPE.MOVIE_TYPE_ALL) {
        this.moviesSorted = moviesByCategory
      } else {
        this.moviesSorted = moviesByCategory.filter(
          (movie) => movie.type_id === parseInt(codeType)
        )
      }
    },
  },
}
