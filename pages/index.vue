<template>
  <div>
    <md-navbar />
    <md-panel />
    <md-footer />
  </div>
</template>

<script>
import MdNavbar from '~/components/organisms/Navbar.vue'
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
