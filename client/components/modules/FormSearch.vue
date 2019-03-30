<template>
  <form
    class="c-form-search"
    @submit.prevent="onSubmit"
  >
    <b-field
      class="c-form-search__input"
    >
      <b-input
        v-model="internalValue"
        :title="inputTitle"
        :placeholder="placeholder"
        :autofocus="autofocus"
        @input="onInput"
      />
    </b-field><!-- /.c-form-search__input -->
    <div class="c-form-search__submit">
      <button
        :disabled="loading"
        type="submit"
        class="c-form-search__submit-button button is-primary"
      >{{ submitText }}</button>
    </div><!-- /.c-form-search__submit -->
  </form><!-- /.c-form-search -->
</template>

<script>
export default {
  name: 'FormSearch',
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    inputTitle: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    submitText: {
      type: String,
      default: 'Search'
    }
  },
  computed: {
    internalValue: {
      get() { return this.value },
      set(value) { this.$emit('input', value) }
    }
  },
  methods: {
    onInput(event) { this.$emit('input', event) },
    onSubmit(event) { this.$emit('submit', event) }
  }
}
</script>

<style lang="scss">
.c-form-search {
  display: flex;
  align-items: flex-start;

  &__input {
    flex: 1 0 auto;
    margin: 0;

    &:not(:last-child) {
      margin: 0;
    }
  }

  &__submit {
    width: 80px;
    min-width: 80px;
    flex: 0 1 80px;
    text-align: center;

    &-button {
      display: block;
      width: 100%;
    }
  }
}
</style>
