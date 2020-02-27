<template>
  <header class="o-navBar">
    <div class="o-navBar__inner">
      <span class="o-navBar__logo">Mandal</span>
      <span class="o-navBar__title">コミュニティ</span>
      <div class="o-navBar__nav">
        <div class="o-navBar__navItem">
          <Switcher20 />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Switcher20 from '@carbon/icons-vue/lib/switcher/20';
export default {
  name: 'md-navbar',
  components: {
    Switcher20
  }
}
</script>

<style scoped lang="scss">
.o-navBar {
  height: 48px;
  background-color: $background;
  &__inner {
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .o-navBar__logo {
      padding-left: 16px;
      color: $white;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 20px;
      width: calc(100% - 16px);
    }
    .o-navBar__title {
      color: $white;
      text-align: center;
      width: 100%;
    }
    .o-navBar__nav {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      &Item {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: white;
      }
    }
  }
}
</style>