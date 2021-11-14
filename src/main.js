import Vue from 'vue'
import App from './App.vue'
import VuePapaParse from 'vue-papa-parse'
// import Fuse from 'fuse.js'


import { store } from './store';
import VueFuse from 'vue-fuse'
Vue.use(VueFuse);

Vue.use(VuePapaParse)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
