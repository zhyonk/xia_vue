// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/router'
import store from './store/store'
import axios from './axios/https'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import global_ from './components/Global'
import VueScroller from 'vue-scroller'
Vue.prototype.GLOBAL = global_
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/json'
FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueScroller)

const lstore = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})
Vue.use(vuexI18n.plugin, lstore)
const translationsEn = {
  'content': 'This is some {type} content'
}

Vue.i18n.add('zh', translationsEn)
// set the start locale to use
Vue.i18n.set('zh')

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  store,
  axios,
  template: '<App/>',
  components: {
    App
  }
})
