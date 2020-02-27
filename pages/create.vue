<template>
  <div>
    <md-navbar class="animated"/>
    <md-panel />
    <md-footer class="animated"/>
  </div>
</template>

<script>
import MdNavbar from '~/components/organisms/navbar/Navbar.vue'
import MdPanel from '~/components/organisms/Panel.vue'
import MdFooter from '~/components/organisms/Footer.vue'

export default {
  components: {
    MdNavbar,
    MdPanel,
    MdFooter
  }
}
</script>

<style scoped lang="scss">
.animated {
  animation: fadein 0s ease 0.4s 1 forwards;
  opacity: 0;
}
@-webkit-keyframes fadein {
  100% {
    opacity: 1;
  }
}
@keyframes fadein {
  100% {
    opacity: 1;
  }
}
</style>