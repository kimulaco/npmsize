const pkg = require('./package')

module.exports = {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/scss/base.scss'
  ],
  plugins: [],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    '@nuxtjs/axios',
    'nuxt-buefy',
    '@nuxtjs/pwa'
  ],
  styleResources: {
    sass: [
      '@/assets/scss/_define.scss',
      '@/assets/scss/_mixin.scss'
    ]
  },
  googleAnalytics: {
    id: 'UA-137344422-1',
    dev: false
  },
  srcDir: 'client/',
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
