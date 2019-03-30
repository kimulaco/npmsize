<template>
  <div class="c-table-result box">
    <table class="c-table-result__table table">
      <thead class="c-table-result__head">
        <tr class="c-table-result__tr">
          <th>Name</th>
          <th>Version Name</th>
          <th>Size</th>
          <th>Minify size</th>
          <th>GZIP size</th>
        </tr><!-- /.c-table-result__tr -->
      </thead><!-- /.c-table-result__head -->
      <tbody class="c-table-result__body">
        <tr
          v-for="pkg in data"
          :key="pkg.name"
          class="c-table-result__tr"
        >
          <th
            v-if="pkg.name"
            class="c-table-result__name"
          >
            <a
              :href="`https://www.npmjs.com/package/${pkg.name}`"
              target="_blank"
            >{{ pkg.name }}</a>
          </th>
          <td
            v-if="pkg.versionedName"
            class="c-table-result__versioned-name"
          >{{ pkg.versionedName }}</td>
          <td
            v-if="pkg.size"
            class="c-table-result__size"
          >{{ getScreanValue(pkg.size) }} (B)</td>
          <td
            v-if="pkg.minified"
            class="c-table-result__minified"
          >{{ getScreanValue(pkg.minified) }} (B)</td>
          <td
            v-if="pkg.gzipped"
            class="c-table-result__gzipped"
          >{{ getScreanValue(pkg.gzipped) }} (B)</td>
          <td
            v-if="pkg.error"
            class="c-table-result__error"
            colspan="4"
          ><strong>{{ pkg.error }}</strong></td>
        </tr><!-- /.c-table-result__tr -->
      </tbody><!-- /.c-table-result__body -->
    </table><!-- /.c-table-result__table -->
  </div><!-- /.c-table-result -->
</template>

<script>
const numberFormat = new Intl.NumberFormat()

export default {
  name: 'TableResult',
  props: {
    data: {
      type: Array,
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
  margin: 24px 0 0;

  th,
  td {
    word-break: break-word;
  }

  &__table {
    width: 100%;
    table-layout: fixed;
  }

  &__heading {
    width: 160px;
  }
}
</style>
