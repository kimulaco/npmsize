<template>
  <table
    class="c-table-result table"
  >
    <tbody class="c-table-result__body">
      <tr
        v-for="(value, key) in data"
        :key="key"
        class="c-table-result__tr"
      >
        <th class="c-table-result__heading">{{ key }}</th>
        <td class="c-table-result__data">{{ getScreanValue(value) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const numberFormat = new Intl.NumberFormat()

export default {
  name: 'TableResult',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    getScreanValue(value) {
      if (isNaN(value)) {
        return value
      }

      return numberFormat.format(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-table-result {
  width: 100%;
  margin: 24px 0 0;
  table-layout: fixed;

  &__heading {
    width: 160px;
  }
}
</style>
