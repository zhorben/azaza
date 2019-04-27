import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/pages/landing'
import Auth from '@/components/auth'
import Forgot from '@/components/forgot'
import NotFound from '@/components/not_found'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '*', redirect: '/404'},

    { path: '/', name: 'landing', component: Landing },
    { path: '/404', name: 'not_found', component: NotFound },
    { path: '/auth/:type', name: 'auth', component: Auth },
    { path: '/forgot', name: 'forgot', component: Forgot }
  ]
})
