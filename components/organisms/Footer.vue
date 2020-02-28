<template>
  <header class="o-footer">
    <div class="o-footer__inner">
      <span class="o-footer__title">Copyright ©︎ {{ new Date().getFullYear() }} Mandal by <a href="https://twitter.com/hrqsn">@hrqsn</a>.</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'md-footer'
}
</script>

<style scoped lang="scss">
.o-footer {
  height: 48px;
  background-color: transparent;
  &__inner {
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .o-footer__title {
      color: #C6C6C6;
      text-align: center;
      width: 100%;
      font-size: 14px;
      font-family: 'IBM Plex Sans', sans-serif;
      a {
        color: #00acee;
      }
    }
  }
}
</style>