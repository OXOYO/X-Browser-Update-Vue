/**
 * Created by OXOYO on 2017/7/6.
 */

import BrowserUpdate from './BrowserUpdate.vue'

const XBrowserUpdate = {}

XBrowserUpdate.installed = false
XBrowserUpdate.install = function (Vue) {
  if (XBrowserUpdate.installed) {
    return
  }

  Vue.component('x-browser-update', BrowserUpdate)
  XBrowserUpdate.installed = true
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(XBrowserUpdate)
}

export default XBrowserUpdate
