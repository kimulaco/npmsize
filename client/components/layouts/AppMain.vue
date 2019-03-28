<template>
  <main class="l-app-main">
    <div class="l-app-main__inner">
      <slot />
    </div><!-- /.l-app-main__inner -->
  </main><!-- /.l-app-main -->
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
.l-app-main {
  &__inner {
    max-width: $content-max-width;
    margin: 0 auto;
    padding: 40px 10px;
  }
}
</style>
