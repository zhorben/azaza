import Vue from 'vue'
import Vuelidate from 'vuelidate'
import withParams from 'vuelidate/lib/withParams'

Vue.use(Vuelidate)

export const latin = withParams({type: 'latin'}, value =>
  (!(new RegExp(`[^\u0000-\u007f]`)).test(value)))

export const password = withParams({type: 'password'}, value =>
  (new RegExp(`^$|^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_\\-=+\\\\|\\[\\]{}:;.,<>?]{6,100}$`)).test(value))

export const notNumeric = withParams({type: 'integer'}, value =>
  (!(new RegExp(`[0-9]`)).test(value)))

export const checkbox = withParams({type: 'checkbox'}, value => value)

export const address = withParams({type: 'address'}, value =>
  (new RegExp(`^[a-zA-Z0-9.,\s]+$`)).test(value))

export const city = withParams({type: 'city'}, value =>
  (new RegExp(`^[a-zA-Z.-\s]+$`)).test(value))
