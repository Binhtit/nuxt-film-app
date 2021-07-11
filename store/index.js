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
      'https://nuxt-movies-app-default-rtdb.asia-southeast1.firebasedatabase.app/moviesLatestArr.json'
    )
    if (moviesLatestArr) {
      contextVue.state.moviesLatestArr = moviesLatestArr
    }
  },
  countClick({ commit }) {
    commit('countClick')
  },
}
