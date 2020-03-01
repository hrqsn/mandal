<template>
  <header class="footer">
    <div class="footer-inner">
      <span class="footer-title">Copyright ©︎ {{ new Date().getFullYear() }} Mandal by <a href="https://twitter.com/hrqsn" target="_blank" rel=”noopener”>@hrqsn</a>.</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'md-footer'
}
</script>

<style scoped lang="scss">
.footer {
  height: 48px;
  background-color: transparent;
  &-inner {
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .footer-title {
      color: #C6C6C6;
      text-align: center;
      width: 100%;
      font-size: 14px;
      a {
        color: #00acee;
      }
    }
  }
}
</style>