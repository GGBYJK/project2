import Vue from 'vue'
import store from './store/store.js'
import App from './App.vue'
import Less from 'less'
import router from './router/index.js'
import Vant from 'vant';
import qs from 'qs'
import Vconsole from 'vconsole'
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Less);
let vconsole = new Vconsole()
Vue.use(vconsole)

Vue.prototype.$qs = qs;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
