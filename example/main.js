// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import XBrowserUpdate from '../src/index.js'
// import XBrowserUpdate from '../dist/XBrowserUpdate.js'
import App from './App'

Vue.config.productionTip = false
console.log('use XBrowserUpdate', XBrowserUpdate)
Vue.use(XBrowserUpdate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
