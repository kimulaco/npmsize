<template>
  <p class="c-loading">
    <b-icon
      icon="loading"
      size="is-small"
      type="is-primary"
      class="c-loading__icon"
    />
    <span class="c-loading__text">{{ text }}</span>
  </p>
</template>

<script>
export default {
  name: 'TableResult',
  props: {
    text: {
      type: String,
      default: 'Loading now...'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
