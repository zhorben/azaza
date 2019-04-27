<template>
    <div class="js-tab-group sign-form center-block">
        <div class="tabs tab-group">
          <router-link class="tab-item tab tab-signin" tag="div" to="/auth/signin">
            {{ i18n('signin') }}
          </router-link>
          <router-link class="tab-item tab tab-signup" tag="div" to="/auth/signup">
            {{ i18n('signup') }}
          </router-link>
        </div>

        <div class="js-tab" :class="{ 'active': isActiveType('signin') }">
          <div class="form">
            <form @submit.prevent="handleSignin">
              <input class="input"
                     v-model="signinForm.email"
                     placeholder="Email">
              <div class="input-group">

                <input class="input"
                       v-model="signinForm.password"
                       type="password"
                       placeholder="Пароль">

                <div class="forgot-link">
                  <router-link :to="{ name: 'forgot' }">Забыли пароль?</router-link>
                </div>
              </div>

              <validation-errors v-if="signinErrors.length"
                                 :errors="signinErrors"></validation-errors>

              <button class="sign-button"
                      type="submit">
                Войти
              </button>
            </form>
          </div>
        </div>

        <div class="js-tab" :class="{ 'active': isActiveType('signup') }">
          <div class="form">
            <form @submit.prevent="handleSignup">
              <div class="input-group input-group-2">
                <input class="input"
                       v-model="signupForm.first"
                       placeholder="Имя">

                <input class="input"
                       v-model="signupForm.last"
                       placeholder="Фамилия">
              </div>

              <input class="input"
                     v-model="signupForm.email"
                     placeholder="Email">

              <div class="input-group">
                  <div class="show-password">
                    <input class="input"
                            v-model="signupForm.password"
                            type="password"
                            placeholder="Пароль">
                  </div>
                  <div class="show-password">
                    <input class="input"
                           v-model="signupForm.confirmPassword"
                           type="password"
                           placeholder="Подтверждение пароля">
                  </div>
              </div>

              <validation-errors v-if="signupErrors.length"
                                 :errors="signupErrors"></validation-errors>

              <button class="sign-button"
                      type="submit">
                  Зарегистрироваться
              </button>
            </form>
          </div>
        </div>

    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {collectValidationErrors} from '@/app/mixins'
import {required, maxLength, sameAs, email} from 'vuelidate/lib/validators'
import {password, latin, notNumeric} from '@/app/validations'

let data = () => ({
  showPassword: false,
  signinForm: {
      email: '',
      password: ''
  },
  signupForm: {
      first: '',
      last: '',
      email: '',
      password: '',
      confirmPassword: ''
  }
});

export default {
  name: 'auth',
  mixins: [collectValidationErrors],
  data,
  computed: {
    ...mapGetters([
      'i18n',
      'isMobile'
    ]),
    signinErrors() {
      return this.validationErrors([
        ['signinForm.email', ['email']],
        ['signinForm.password', ['password']],               
      ])
    },
    signupErrors() {
      return this.validationErrors([
        ['signupForm.first', ['f_name']],
        ['signupForm.last', ['l_name']],
        ['signupForm.email', ['email']],
        ['signupForm.password', ['password']],
        ['signupForm.confirmPassword', ['confirm_password']]
      ])
    }
  },
  methods: {
    ...mapActions([
      'signIn',
      'signUp',
      // 'setAuthDump',
      // 'resetAuthDump'
    ]),
    isActiveType (type) {
      return this.$route.params.type === type;
    },
    handleSignin () {
      this.$v.signinForm.$touch();

      if (!this.$v.signinForm.$invalid) {
        this.signIn([this.signinForm.email, this.signinForm.password]);
      }
    },
    handleSignup () {
      this.$v.signupForm.$touch()

      if (!this.$v.signupForm.$invalid) {
        this.signUp([
          this.signupForm.first,
          this.signupForm.last,
          this.signupForm.email,
          this.signupForm.password
        ])
      }
    }
  },
  validations: {
    signinForm: {
      email: {
        required,
        email
      },
      password: {
        required,
        password,
      }
    },
    signupForm: {
      first: {
        required,
        latin,
        notNumeric,
        maxLength: maxLength(24),
      },
      last: {
        required,
        latin,
        notNumeric,
        maxLength: maxLength(24),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        password,
      },
      confirmPassword: {
        required,
        password,
        confirmPassword: sameAs('password'),
      },
    }
  },
}
</script>