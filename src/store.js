import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      games: [],
      selections: [],
      count: 0,
    }
    
  },
  mutations: {
    add(state, payload) {
      state.selections.push(payload.value)
    },
    addGame(state, game) {
      state.games.push(game)
    },
    removeGame(state, game) {
      state.games.splice(this.state.games.indexOf(game), 1)
    }
  },
  actions: {
    add(context, payload) {
      context.commit('add', payload)
    },
    addGame(context, payload) {
      if (this.state.games.indexOf(payload.value) === -1) {
        context.commit('addGame', payload.value)
      }
    },
    removeGame(context, payload) {
      if (this.state.games.indexOf(payload.value) !== -1) {
        context.commit('removeGame', payload.value)
      }
    }
  },
  getters: {
    selectionList(state) {
      return state.selections
    },
    selectionCount(state) {
      return state.selections.length
    },
    games: state => state.games.map(jsonGame => JSON.parse(jsonGame)),
        isInBasket (state) {
            return game => state.games.indexOf(game) !== -1
        }
  }
})

export default store