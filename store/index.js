export const state = () => ({
  moviesTypes: [],
  moviesArr: [],
  moviesLatestArr: [],
  countClick: 0,
})

export const mutations = {
  addMoviesArr(state, payload) {
    state.moviesArr = payload
  },
  addMoviesLatestArr(state, payload) {
    state.moviesLatestArr = payload
  },
  countClick(state) {
    state.countClick++
  },
}

export const actions = {
  async nuxtServerInit(contextVue, context) {
    const moviesLatestArr = await context.$axios.$get(
      'http://127.0.0.1:8000/api/top20newest'
    )
    if (moviesLatestArr) {
      contextVue.state.moviesLatestArr = moviesLatestArr
    }
  },
  countClick({ commit }) {
    commit('countClick')
  },
}
