<template>
  <div>
    <md-navbar />
    <div class="content">
      <h1 class="title">使用ライブラリ 🎁</h1>
      <ul class="list">
        <li>
          <a href="https://github.com/nuxt-community/dotenv-module/blob/master/LICENSE" target="_blank" rel=”noopener”>@nuxtjs/dotenv - MIT</a>
        </li>
        <li>
          <a href="https://github.com/nuxt-community/style-resources-module/blob/master/LICENSE" target="_blank" rel=”noopener”>@nuxtjs/style-resources - MIT</a>
        </li>
        <li>
          <a href="https://github.com/carbon-design-system/carbon/blob/master/LICENSE" target="_blank" rel=”noopener”>@carbon/icons-vue - Apache License 2.0</a>
        </li>
        <li>
          <a href="https://github.com/kentcdodds/cross-env/blob/master/LICENSE" target="_blank" rel=”noopener”>cross-env - MIT</a>
        </li>
        <li>
          <a href="https://github.com/nuxt/nuxt.js/blob/dev/LICENSE" target="_blank" rel=”noopener”>nuxt - MIT</a>
        </li>
        <li>
          <a href="https://github.com/Developmint/nuxt-webfontloader/blob/master/LICENSE" target="_blank" rel=”noopener”>nuxt-webfontloader - MIT</a>
        </li>
        <li>
          <a href="https://github.com/webpack-contrib/sass-loader/blob/master/LICENSE" target="_blank" rel=”noopener”>sass-loader - MIT</a>
        </li>
        <li>
          <a href="https://github.com/sass/node-sass/blob/master/LICENSE" target="_blank" rel=”noopener”>node-sass - MIT</a>
        </li>
        <li>
          <a href="https://github.com/rodneyrehm/viewport-units-buggyfill/blob/master/LICENSE.txt" target="_blank" rel=”noopener”>viewport-units-buggyfill - MIT</a>
        </li>
        <li>
          <a href="https://github.com/robinvdvleuten/vuex-persistedstate/blob/master/LICENSE" target="_blank" rel=”noopener”>vuex-persistedstate - MIT</a>
        </li>
      </ul>
    </div>
    <md-footer />
  </div>
</template>

<script>
import MdNavbar from '~/components/navbar/MainNavbar.vue'
import MdFooter from '~/components/Footer.vue'
export default {
  components: {
    MdNavbar,
    MdFooter
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: $white;
  padding: 16px;
  .title {
    font-size: 18px;
    font-weight: 400;
  }
  .list {
    margin-top: 24px;
    a {
      color: $gray-40;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>