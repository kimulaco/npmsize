<template>
  <header class="l-app-header">
    <div class="l-app-header__inner">
      <h1 class="l-app-header__title">npms</h1>
    </div><!-- /.l-app-header__inner -->
  </header><!-- /.l-app-header -->
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.l-app-header {
  color: #fff;
  background-color: $color-main;

  &__inner {
    max-width: $content-max-width;
    margin: 0 auto;
    padding: 10px;
  }

  &__title {
    font-size: 20px;
  }
}
</style>
