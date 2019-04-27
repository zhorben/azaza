<template>
    <div class="content">
      <div class="error-code">404</div>
      <div class="error-description">Страница не найдена</div>
      <router-link to="/" class="go-button">Перейти на главную</router-link>
    </div>
</template>

<script>
import { setBodyClasses } from '@/app/utils';

export default {
  mounted() {
      setBodyClasses('page-error page-error-404');
  },
};

</script>
