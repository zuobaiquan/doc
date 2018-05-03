// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

Vue.config.productionTip = false
import http from './common/apiRequest'
Vue.prototype.get = http.get
Vue.prototype.post = http.post
Vue.prototype.delete = http.delete
import "./assets/css/base.css"

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
