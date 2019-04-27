<template>
  <div>
    <router-link to="/auth/signin">Войти</router-link>
    <router-link to="/auth/signup">Зарегистрироваться</router-link>
    <router-link to="/404">404</router-link>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {

    }
  }
}
</script>