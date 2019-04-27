<template>
  <div class="main-header">
    <div class="lang-block"
         :class="{'show-dd': langDD}"
         @click="langDD = !langDD">
      <a>
        {{ activeLang }}
        <span class="icon-down-dir"></span>
        <!-- TODO: add icons -->
      </a>
      <ul class="submenu">
        <li v-for="l in langs" :key="l">
          <a @click="setLanguage(l)">{{ l }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'main-header',
  data: () => ({
    langDD: false
  }),
  computed: {
    ...mapGetters([
      'i18n',
      'activeLang',
      'langs'
    ])
  },
  methods: {
    ...mapActions([
      'setLanguage'
    ])
  }
}
</script>