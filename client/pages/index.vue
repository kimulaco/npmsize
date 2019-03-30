<template>
  <div>
    <form-search
      v-model="keyword"
      :loading="isLoading"
      :autofocus="true"
      input-title="Package name"
      @submit="onSubmitForm"
    />

    <table-result
      v-if="!isNoResult"
      :data="result"
    />
  </div>
</template>

<script>
import axios from 'axios'
import FormSearch from '@/components/modules/FormSearch'
import TableResult from '@/components/modules/TableResult'

export default {
  name: 'PageIndex',
  components: {
    FormSearch,
    TableResult
  },
  data() {
    return {
      isLoading: false,
      keyword: '',
      result: {}
    }
  },
  computed: {
    isNoResult() {
      return Object.keys(this.result).length <= 0
    }
  },
  methods: {
    async onSubmitForm() {
      this.isLoading = true

      const { data } = await axios.get(`/api/size/${this.keyword}`)

      this.result = data
      this.isLoading = false
    }
  }
}
</script>
