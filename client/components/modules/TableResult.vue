<template>
  <table
    class="c-table-result table"
  >
    <tbody>
      <tr
        v-for="(value, key) in data"
        :key="key"
      >
        <th>{{ key }}</th>
        <td>{{ getScreanValue(value) }}</td>
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
}
</style>
