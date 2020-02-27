<template>
  <div>
    <md-navbar />
    <md-collection />
    <md-footer />
  </div>
</template>

<script>
import MdNavbar from '~/components/organisms/navbar/MainNavbar.vue'
import MdCollection from '~/components/organisms/Collection.vue'
import MdFooter from '~/components/organisms/Footer.vue'

export default {
  components: {
    MdNavbar,
    MdCollection,
    MdFooter
  }
}
</script>
