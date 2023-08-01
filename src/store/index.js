import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
    getCounter(state) {
      return state.counter
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})
