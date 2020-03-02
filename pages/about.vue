<template>
  <div>
    <md-navbar />
    <div class="content">
      <div class="ascii">
┏━┳━┓╋╋╋╋╋╋┏┓
┃┃┃┃┣━┓┏━┳┳┛┣━┓┏┓
┃┃┃┃┃╋┗┫┃┃┃╋┃╋┗┫┗┓
┗┻━┻┻━━┻┻━┻━┻━━┻━┛
      </div>
      <div class="description">
        Mandalは、アイデア発想法「<a href="https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%B3%E3%83%80%E3%83%A9%E3%83%BC%E3%83%88" target="_blank" rel=”noopener”>マンダラート</a>」を実行できるWEBツールです。<br/>
        <a href="/licenses" class="developer">謝辞</a>
      </div>
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

<style scoped lang="scss">
.ascii {
  font-family: monospace;
  white-space: pre;
  color: #fff;
  line-height: 1;
}
.content {
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: $white;
  padding: 16px;
  .description {
    margin-top: 40px;
    text-align: center;
    a {
      color: $gray-40;
      &:hover {
        text-decoration: underline;
      }
    }
    .developer {
      font-size: 12px;
    }
  }
}
</style>