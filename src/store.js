import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  number: {},         //初始化number对象，以键值对方式储存商品的数量,{商品名:数量}
  money: 0,           //总价
  price: {}           //以键值对形式储存商品的价格,{商品名:价格}
}

const mutations = {                        //定义add,reduce方法
  add(state, data) {                      //state: vuex的state, data: {data: 价格, name: 商品名}
    if (state.number[data.name]) {        //判断是否有该商品名的属性,没则添加,有则数量+1
      state.number[data.name] += 1;
      state.money += data.data;
    } else {
      Vue.set(state.number, data.name, 1)           //在state.number对象添加属性'商品名:1'
      Vue.set(state.price, data.name, data.data)    //在state.price对象添加属性'商品名:价格'
      state.money += data.data;
    }
  },
  reduce(state, data) {
    if (state.number[data.name] > 0) {        //判断商品数量是否大于0
      state.number[data.name] -= 1;
      state.money -= data.data;
    }
  }
}

const actions = {                     //异步处理
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

