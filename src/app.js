import Vue from 'vue'
import App from './App.vue'
import store from '@/vuex/store'
import { sync } from 'vuex-router-sync'
import router from './router'

import '@/app/validations'
import '@/app/components'

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
