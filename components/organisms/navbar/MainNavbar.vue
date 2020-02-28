<template>
  <div>
    <header class="o-navBar">
      <div class="o-navBar__inner">
        <div class="o-navBar__empty"></div>
        <span class="o-navBar__logo">Mandal</span>
        <div class="o-navBar__nav">
          <div class="o-navBar__navItem" @click="this.switch">
            <Switcher20 v-if="!isOpenVal" />
            <Close20 v-else />
          </div>
        </div>
      </div>
    </header>
    <nav class="o-navBar__menu" :data-open="isOpenVal">

    </nav>
  </div>
</template>

<script>
import Switcher20 from '@carbon/icons-vue/lib/switcher/20';
import Close20 from '@carbon/icons-vue/lib/close/20';
export default {
  name: 'md-navbar',
  components: {
    Switcher20,
    Close20
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpenVal: this.isOpen
    }
  },
  methods: {
    switch() {
      this.isOpenVal = !this.isOpenVal;
    }
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
    .o-navBar__empty {
      width: 100%;
    }
    .o-navBar__logo {
      color: $white;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 20px;
      width: calc(100% - 16px);
      text-align: center;
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
  }
}
.o-navBar__menu {
  &[data-open="true"] {
    transform: translateX(0);
    transition: all .15s cubic-bezier(0,0,.38,.9);
    border-bottom: 1px solid #393939;
    box-shadow: -2px 2px 6px rgba(0,0,0,.2);
  }
  color: #fff;
  z-index: 10000;
  position: fixed;
  right: 0;
  top: 48px;
  height: 100%;
  width: 16rem;
  background-color: #161616;
  border-left: 1px solid #393939;
  transform: translateX(16rem);
  overflow-y: hidden;
  transition: all .11s cubic-bezier(.2,0,1,.9);
}
</style>