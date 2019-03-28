<template>
  <table>
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
</style>
