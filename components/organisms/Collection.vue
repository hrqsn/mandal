<template>
  <div class="o-collection">
    <div class="o-collection__wrapper">
      <div class="card transparent"></div>
      <nuxt-link to="/create" class="card skeleton">
        <span>マンダルを作成<Add20 /></span>
      </nuxt-link>
      <nuxt-link class="card" :to="{ name: 'create', query: { project: project.id }, params: { project: project } }" v-for="(project) in projects" :key="project.id">
        <span>{{ project.title }}</span>
      </nuxt-link>
      <div class="card transparent last"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Add20 from '@carbon/icons-vue/lib/add/20';

export default {
  name: 'md-collection',
  components: {
    Add20
  },
  data() {
    return {
      projects: {}
    }
  },
  computed: {
    ...mapGetters({
      data: 'project/getItems'
    })
  },
  mounted() {
    if(this.data) this.projects = this.data.slice().reverse();
  }
}
</script>

<style scoped lang="scss">
.o-collection {
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    display:-webkit-box;
    display:-ms-flexbox;
    display: flex;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
    .card {
      flex: 0 0 auto;
      margin: 4px;
      width: 192px;
      height: 192px;
      background-color: $gray-10;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      transition: all 70ms cubic-bezier(0,0,.38,.9);
      color: #161616;
      span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          fill: $white;
        }
      }
      &:hover {
        background-color: $white;
      }
      &.transparent {
        width: calc(50vw - 8px - 96px + 4px);
        margin: 4px 0;
        visibility: hidden;
        &.last {
          width: 12px;
        }
      }
      &.skeleton {
        color: $gray-20;
        background-color: transparent;
        border: dashed 4px;
        border-width: 1px;
        border-color: $gray-20;
        &:hover {
          border-color: $white;
          color: $white;
        }
      }
    }
  }
}
</style>