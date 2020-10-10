import { NuxtConfig } from '@nuxt/types'

import meta from './package.json'

const config: NuxtConfig = {
  target: 'server',

  modern: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Dig! - the Online Game',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/app.scss'
  ],

  serverMiddleware: [
    '~/server'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    retry: { retries: 3 }
  },

  // Auth module configuration (https://auth.nuxtjs.org/api/options.html)
  auth: {
  },

  // BootstrapVue module configuration (https://bootstrap-vue.org/docs#nuxtjs-module)
  bootstrapVue: {
    bootstrapVue: {
      bootstrapCSS: false,
      bootstrapVueCSS: false
    },
    componentPlugins: [
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}

export default config
