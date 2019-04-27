import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import auth from './modules/auth'
import i18n from '@/app/i18n'

Vue.use(Vuex)

const state = {
  activeLang: 'en',
  langs: ['en', 'ru', 'by'],
  isMobile: false
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    auth
  },
  getters: {
    i18n,
    activeLang: state => state.activeLang,
    langs: state => state.langs.filter(l => l !== state.activeLang),
    isMobile: state => state.isMobile
  }
})
