
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mandal',
    meta: [
      { charset: 'utf-8' },
      { lang: 'ja' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      },
      {
        rel: 'icon',
        href: '/android-chrome-256x256.png',
        sizes: '256x256'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vubuggyfill.js' },
    { src: "~plugins/persistedstate.js", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/scss/modules/*.scss']
  },
  webfontloader: {
    google: {
      families: ['IBM+Plex+Sans']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
