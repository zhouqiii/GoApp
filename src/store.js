import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations'

Vue.use(Vuex)
// let defaultCity = '北京'

//   try{
//     if(localStorage.city) {
//       defaultCity = localStorage.city
//     }
//   }catch (e) {}
export default new Vuex.Store({
  state: state,
  // {
  //   city: defaultCity
  // },
  mutations
  // getters: {
  //   testSample (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
