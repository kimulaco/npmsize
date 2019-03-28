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
        <td>{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableResult',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-table-result {
  width: 100%;
}
</style>
