import axios from 'axios'

export default {
  state: {
    auth: {
      signIn: {
        error: null
      },
      signUp: {
        error: null,
        userId: null
      }
    }
  },
  getters: {
    signin: state => state.auth.signIn,
    signup: state => state.auth.signUp
  },
  mutations: {
    SET_SIGNIN_ERROR (state, error) {
      state.auth.signIn.error = error
    },
    SET_SIGNUP_ERROR (state, error) {
      state.auth.signUp.error = error
    },
    SET_SIGNUP_USER_ID (state, id) {
      state.auth.signUp.userId = id
    }
  },
  actions: {
    signIn (store, [login, password]) {
      console.log('SignIn: ' + login, password)
    },
    signUp (store, [firstName, lastName, email, password]) {
      console.log(firstName, lastName, password)
      axios.post('/api/auth', {
        firstName,
        lastName,
        email,
        password
      }).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
