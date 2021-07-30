export const state = () => ({
  moviesTypes: [],
  allMoviesArr: [],
  moviesLatestArr: [],
  movie: [],
  countClick: 0,
})

export const mutations = {
  addAllMoviesArr(state, payload) {
    state.allMoviesArr = payload
  },
  addMoviesLatestArr(state, payload) {
    state.moviesLatestArr = payload
  },
  addMovie(state, payload) {
    state.movie = payload
  },
  countClick(state) {
    state.countClick++
  },
}

export const actions = {
  async nuxtServerInit(contextVue, context) {
    const moviesLatestArr = await context.$axios.$get(
      'https://hhtq.tv/api/top20newesta'
    )
    if (moviesLatestArr) {
      contextVue.state.moviesLatestArr = moviesLatestArr
    }
  },
  countClick({ commit }) {
    commit('countClick')
  },
}
