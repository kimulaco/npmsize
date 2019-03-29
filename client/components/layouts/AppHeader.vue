<template>
  <header class="l-app-header">
    <div class="l-app-header__inner">
      <h1>npms</h1>
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
  &__inner {
    max-width: $content-max-width;
    margin: 0 auto;
    padding: 0 10px;
  }
}
</style>
