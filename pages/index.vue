<template>
  <div>
    <md-navbar />
    <div class="collection">
      <div class="collection-wrapper">
        <div class="card transparent"></div>
        <nuxt-link to="/create" class="card skeleton">
          <span>マンダルを作成<Add20 /></span>
        </nuxt-link>
        <div class="card"  v-for="project in this.projects" :key="project.id">
          <nuxt-link :to="{name:'create', query:{ project: project.id }, params:{project: project}}">
            <span>{{ project.title }}</span>
          </nuxt-link>
          <!-- <div class="download" @click="download(project)">
            <Download20 />
          </div> -->
        </div>
        <div class="card transparent last"></div>
      </div>
    </div>
    <md-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Add20 from '@carbon/icons-vue/lib/add/20';
import Download20 from '@carbon/icons-vue/lib/download/16';
import MdNavbar from '~/components/navbar/MainNavbar.vue'
import MdFooter from '~/components/Footer.vue'

export default {
  components: {
    Add20,
    Download20,
    MdNavbar,
    MdFooter
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
  methods: {
    download(item) {
      this.$router.push({ name: 'pdf', params: {data: item}});
    }
  },
  mounted() {
    if(this.data) this.projects = this.data.slice().reverse();
  }
}
</script>

<style scoped lang="scss">
.collection {
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  &-wrapper {
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
      position: relative;
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
      a {
        display: flex;
        width: 100%;
        height: 100%;
        color: #161616;
      }
      .download {
        display: flex;
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: 0;
        z-index: 1;
        padding: 8px;
        fill: #161616;
        border-bottom-right-radius: 2px;
        &:hover {
          background-color: #e5e5e5;
          +.card {
            pointer-events: none;
          }
        }
      }
      &:hover {
        background-color: $white;
        .download {
          opacity: 1;
        }
      }
      &.isDisabled {
        pointer-events: none;
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