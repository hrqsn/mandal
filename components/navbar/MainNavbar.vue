<template>
  <div>
    <header class="navbar" :data-open="isOpenVal">
      <div class="navbar-inner">
        <div class="navbar-empty"></div>
        <span class="navbar-logo">Mandal</span>
        <div class="navbar-nav">
          <div class="navbar-navItem" @click="this.switch">
            <Switcher20 v-if="!isOpenVal" />
            <Close20 v-else />
          </div>
        </div>
      </div>
    </header>
    <nav class="navbar-menu" :data-open="isOpenVal">
      <ul>
        <li>
          <a role="button" href="" class="navbar-menu--link">トップ</a>
        </li>
        <li>
          <a role="button" href="" class="navbar-menu--link">Mandalとは？</a>
        </li>
        <li>
          <a role="button" href="https://twitter.com/hrqsn" target="_blank" rel=”noopener” class="navbar-menu--link">
            <span>開発者</span>
            <div class="navbar-menu--link-icon" style="fill: #55acee;">
              <Twitter16 />
            </div>
          </a>
        </li>
        <hr class="navbar-menu--divider">
        <li>
          <a role="button" href="https://github.com/hrqsn/mandal" target="_blank" rel=”noopener” class="navbar-menu--link" style="margin-top: 1rem;">
            <span>GitHub</span>
            <div class="navbar-menu--link-icon">
              <Launch16 />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Switcher20 from '@carbon/icons-vue/lib/switcher/20';
import Close20 from '@carbon/icons-vue/lib/close/20';
import Launch16 from '@carbon/icons-vue/lib/launch/16';
import Twitter16 from '@carbon/icons-vue/lib/logo--twitter/16';
export default {
  name: 'md-navbar',
  components: {
    Switcher20,
    Close20,
    Launch16,
    Twitter16
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
.navbar {
  height: 48px;
  background-color: $background;
  &-inner {
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .navbar-empty {
      width: 100%;
    }
    .navbar-logo {
      color: $white;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 20px;
      width: calc(100% - 16px);
      text-align: center;
    }
    .navbar-title {
      color: $white;
      text-align: center;
      width: 100%;
    }
    .navbar-nav {
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
        transition: background-color .11s cubic-bezier(.2,0,.38,.9);
        &:hover {
          background-color: #353535;
        }
      }
    }
  }
}
.navbar-menu {
  &[data-open="true"] {
    transform: translateX(0);
    transition: all .15s cubic-bezier(0,0,.38,.9);
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
  transform: translateX(16rem);
  overflow-y: hidden;
  transition: all .11s cubic-bezier(.2,0,1,.9);
  li:first-of-type {
    margin-top: 1rem;
  }
  &--link {
    font-size: .875rem;
    font-weight: 400;
    letter-spacing: .16px;
    line-height: 1.125rem;
    display: flex;
    align-items: center;
    color: #c6c6c6;
    min-height: 2rem;
    height: 3rem;
    padding: 0 1rem;
    justify-content: space-between;
    &:hover {
      background-color: #353535;
    }
    &-icon {
      fill: #c6c6c6;
      display: flex;
      align-items: center;
    }
  }
  &--divider {
    display: block;
    margin: 4rem 1rem 0;
    border-style: solid;
    border-bottom: none;
    border-color: #393939;
  }
}
</style>