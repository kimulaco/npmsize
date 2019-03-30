<template>
  <div>
    <app-header />
    <app-main>
      <nuxt />
    </app-main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader'
import AppMain from '@/components/layouts/AppMain'
import AppFooter from '@/components/layouts/AppFooter'

export default {
  name: 'LayoutDefault',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>
