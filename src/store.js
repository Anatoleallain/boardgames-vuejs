import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      selections: [],
      count: 0,
    }
  },
  mutations: {
    add(state, payload) {
      state.selections.push(payload.value)
    }
  },
  actions: {
    add(context, payload) {
      context.commit('add', payload)
    },
  },
  getters: {
    selectionList(state) {
      return state.selections
    },
    selectionCount(state) {
      return state.selections.length
    }
  }
})

export default store