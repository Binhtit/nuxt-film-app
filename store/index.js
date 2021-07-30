export const state = () => ({
  moviesTypes: [],
  moviesArr: [],
  moviesLatestArr: [],
  movie: [],
  countClick: 0,
})

export const mutations = {
  addMoviesArr(state, payload) {
    state.moviesArr = payload
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
      'https://hhtq.tv/api/top20newest'
    )
    if (moviesLatestArr) {
      contextVue.state.moviesLatestArr = moviesLatestArr
    }
  },
  countClick({ commit }) {
    commit('countClick')
  },
}
