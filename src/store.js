import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  number: {},
  money: 0,
  price: {}
}

const mutations = {
  add(state, data) {
    if (state.number[data.name]) {
      state.number[data.name] += 1;
      state.money += data.data;
    } else {
      Vue.set(state.number, data.name, 1)
      Vue.set(state.price, data.name, data.data)
      state.money += data.data;
    }
  },
  reduce(state, data) {
    if (state.number[data.name] > 0) {
      state.number[data.name] -= 1;
      state.money -= data.data;
    }
  }
}

const actions = {
  add({commit}, {data, name}) {
    commit('add', {data: data, name: name})
  },
  reduce({commit}, {data, name}) {
    commit('reduce', {data: data, name: name})
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

