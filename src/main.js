import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './plugins/element.js'
import 'swiper/dist/css/swiper.css'
import './css/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
