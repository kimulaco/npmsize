<template>
  <section class="section">
    <form @submit.prevent="onSubmitForm">
      <b-field label="Package">
        <b-input
          v-model="keyword"
          autofocus
        />
      </b-field>

      <button
        v-if="!isLoading"
        type="submit"
        class="button"
      >Search</button>

      <loading v-if="isLoading" />
    </form>

    <table-result
      :data="result"
    />
  </section>
</template>

<script>
import axios from 'axios'
import Loading from '@/components/Loading'
import TableResult from '@/components/TableResult'

export default {
  name: 'HomePage',
  components: {
    Loading,
    TableResult
  },
  data() {
    return {
      isLoading: false,
      keyword: '',
      result: {}
    }
  },
  methods: {
    async onSubmitForm() {
      this.isLoading = true

      const { data } = await axios.get(`/api/size/${this.keyword}`)

      console.log(data)

      this.result = data
      this.isLoading = false
    }
  }
}
</script>
