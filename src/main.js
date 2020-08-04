import Vue from 'vue'
import store from './store/store.js'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
