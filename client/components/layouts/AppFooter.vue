<template>
  <footer class="l-app-footer">
    <div class="l-app-footer__inner">
      <p class="l-app-footer__copyright">
        <small class="l-app-footer__copyright-text">&copy; 2019 npmsize.</small>
      </p><!-- /.l-app-footer__copyright -->
    </div><!-- /.l-app-footer__inner -->
  </footer><!-- /.l-app-footer -->
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.l-app-footer {
  &__inner {
    max-width: $content-max-width;
    margin: 0 auto;
    padding: 0 10px;
  }

  &__copyright {
    text-align: center;
  }
}
</style>
