<template>
  <header class="o-navBar">
    <div class="o-navBar__inner">
      <div class="o-navBar__brand">
        <nuxt-link to="/" class="o-navBar__brandItem">
          <Close24 />
        </nuxt-link>
      </div>
      <span class="o-navBar__title">{{ this.title }}</span>
      <div class="o-navBar__nav">
        <div class="o-navBar__navItem">
          <Number />
        </div>
        <div class="o-navBar__navItem">
          <Checkmark20 />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Close24 from '@carbon/icons-vue/lib/close/24';
import Number from '@carbon/icons-vue/lib/number--9/24';
import Checkmark20 from '@carbon/icons-vue/lib/checkmark/20';
export default {
  name: 'md-navbar',
  data() {
    return {
      title: "メインテーマ"
    }
  },
  components: {
    Close24,
    Number,
    Checkmark20
  },
  created() {
    this.$nuxt.$on('TITLE', title => {
      this.title = title;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off('TITLE');
  }
}
</script>

<style scoped lang="scss">
.o-navBar {
  height: 48px;
  background-color: $background;
  &__inner {
    min-height: 48px;
    width: calc(592px + 36px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .o-navBar__logo {
      padding-left: 16px;
      fill: $white;
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
    .o-navBar__nav, .o-navBar__brand {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      &Item {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: white;
      }
    }
    .o-navBar__brand {
      justify-content: flex-start;
    }
  }
  @include mqdown(sm) {
    &__inner {
      width: 100%;
    }
  }
}
</style>