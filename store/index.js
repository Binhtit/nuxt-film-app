export const state = () => ({
  moviesTypes: [],
  moviesLatestArr: [],
})

export const mutations = {
  addMoviesLatestArr(state, payload) {
    state.moviesLatestArr = payload
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
}
