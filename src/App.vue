<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import mainHeader from '@/components/header'

export default {
  name: 'app',
  components: {
    mainHeader
  },
  data: () => ({

  })
}
</script>

<style lang="scss">
  @import "./sass/main.scss";
</style>