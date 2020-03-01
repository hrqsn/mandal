<template>
  <header class="navbar">
    <div class="navbar-inner">
      <div class="navbar-brand">
        <div class="navbar-brandItem" @click="close">
          <Close24 />
        </div>
      </div>
      <span class="navbar-title">{{ title }}</span>
      <div class="navbar-nav">
        <div class="navbar-navItem" @click="scale">
          <Number9 v-if="isMin" />
          <Number3 v-else />
        </div>
        <div class="navbar-navItem" @click="save">
          <Checkmark20 />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Close24 from '@carbon/icons-vue/lib/close/24';
import Number9 from '@carbon/icons-vue/lib/number--9/24';
import Number3 from '@carbon/icons-vue/lib/number--3/24';
import Checkmark20 from '@carbon/icons-vue/lib/checkmark/20';
export default {
  name: 'md-navbar',
  props: {
    title: String
  },
  data() {
    return {
      isMin: true
    }
  },
  components: {
    Close24,
    Number9,
    Number3,
    Checkmark20
  },
  methods: {
    save() {
      this.$emit('save', true)
    },
    scale() {
      this.isMin = !this.isMin;
      this.$emit('scale', this.isMin)
    },
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped lang="scss">
.navbar{
  height: 48px;
  background-color: $background;
  &-inner {
    min-height: 48px;
    width: calc(592px + 36px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .navbar-logo {
      padding-left: 16px;
      fill: $white;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 20px;
      width: calc(100% - 16px);
    }
    .navbar-title {
      color: $white;
      text-align: center;
      width: 100%;
    }
    .navbar-nav, .navbar-brand {
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
    .navbar-brand {
      justify-content: flex-start;
    }
  }
  @include mqdown(sm) {
    &-inner {
      width: 100%;
    }
  }
}
</style>