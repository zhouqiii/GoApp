import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  mutations: {
    changecityname (state, value) {
      state.city = value
    }
  },
  actions: {
    changecitys (ctx, value) {
      ctx.commit('changecityname', value)
    }
  }
})
