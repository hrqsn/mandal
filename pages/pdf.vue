<template>
  <div class="report">
    <div class="overlay" v-if="isLoading">
      <div class="overlay-loading">
        <svg class="loading__svg" viewBox="-75 -75 150 150">
          <title>Loading</title>
          <circle class="loading__stroke" cx="0" cy="0" r="37.5" />
        </svg>
      </div>
    </div>
    <div class="o-panel">
      <div class="o-panel__wrapper">
        <div class="cards" v-for="(cards, i) in cells" :key="cards.id" :data-card=i>
          <div class="cardCell" v-for="(cell, j) in cards" :key="cell.id" :class="maxClasses(i, j)" :data-cell=j>
            <span class="editor" v-text="cells[i][`${j}`]"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
  },
  data () {
    return {
      isLoading: false,
      cells: {}
    }
  },
  methods: {
    maxClasses(i, j) {
      if(i !== "4" && j === "4") {
        return "subTheme";
      } else if(i === "4" && j !== "4") {
        return "subTheme";
      } else if(i === "4" && j === "4") {
        return "mainTheme";
      }
    },
    exportPdf() {
      
    }
  },
  computed: {
    ...mapGetters({
      data: 'project/getItems'
    })
  },
  mounted() {
    this.cells = JSON.parse(this.$route.params.data.data);
    this.exportPdf();
  }
}
</script>

<style scoped lang="scss">
.overlay {
  z-index: 999;
  background: rgba($color: #161616, $alpha: 0.6);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: transparent;
  &-loading {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: initial;
    animation-name: rotate;
    animation-duration: .69s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    width: 10.5rem;
    height: 10.5rem;
    svg {
      circle {
        animation-name: init-stroke;
        animation-duration: 10ms;
        animation-timing-function: cubic-bezier(.2,0,.38,.9);
        stroke-width: 8;
        stroke-linecap: butt;
        stroke-dasharray: 240;
        stroke: var(--cds-interactive-04,#0064ff);
        stroke-dashoffset: 40;
      }
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
.o-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    display: grid;
    grid-template-rows: 192px 192px 192px;
    grid-template-columns: 192px 192px 192px;
    grid-row-gap: 8px;
    grid-column-gap: 8px;
    .cards {
      display: grid;
      grid-template-rows: calc(100% / 3) calc(100% / 3) calc(100% / 3);
      grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
      grid-row-gap: 0px;
      grid-column-gap: 0px;
      opacity: 1;
      border-radius: 2px;
      span {
        cursor: text;
        width: 100%;
      }
      .cardCell {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #fff;
        font-size: 8px;
        padding: 1px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &[data-cell="0"],&[data-cell="1"],&[data-cell="3"],&[data-cell="4"],&[data-cell="6"],&[data-cell="7"] {
          border-right: 1px solid #E0E0E0;
        }
        &[data-cell="0"],&[data-cell="1"],&[data-cell="2"],&[data-cell="3"],&[data-cell="4"],&[data-cell="5"] {
          border-bottom: 1px solid #E0E0E0;
        }
        &[data-cell="0"] {
          border-top-left-radius: 2px;
        }
        &[data-cell="2"] {
          border-top-right-radius: 2px;
        }
        &[data-cell="6"] {
          border-bottom-left-radius: 2px;
        }
        &[data-cell="8"] {
          border-bottom-left-radius: 2px;
        }
      }
      &[data-card="4"] {
        .cardCell {
          &[data-cell="0"],&[data-cell="1"],&[data-cell="3"],&[data-cell="4"],&[data-cell="6"],&[data-cell="7"] {
            border-right: 1px solid #c6c6c6;
          }
          &[data-cell="0"],&[data-cell="1"],&[data-cell="2"],&[data-cell="3"],&[data-cell="4"],&[data-cell="5"] {
            border-bottom: 1px solid #c6c6c6;
          }
        }
      }
      .mainTheme {
        background-color: #c6c6c6;
      }
      .subTheme {
        background-color: #e0e0e0;
      }
    }
    .card {
      background-color: $gray-10;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      opacity: 1;
      cursor: pointer;
      span {
        cursor: text;
        outline-width: 1px;
        width: 100%;
      }
      &.mainTheme {
        background-color: #c6c6c6;
      }
      &.subTheme {
        background-color: #e0e0e0;
      }
      &[data-animation=true] {
        opacity: 0;
        &[data-cell="0"] { 
          animation: fadein 0.2s ease 0.27s 1 forwards;
        }
        &[data-cell="1"] { 
          animation: fadein 0.2s ease 0.2s 1 forwards;
        }
        &[data-cell="2"] { 
          animation: fadein 0.2s ease 0.21s 1 forwards;
        }
        &[data-cell="3"] { 
          animation: fadein 0.2s ease 0.26s 1 forwards;
        }
        &[data-cell="4"] { 
          opacity: 1;
        }
        &[data-cell="5"] { 
          animation: fadein 0.2s ease 0.22s 1 forwards;
        }
        &[data-cell="6"] { 
          animation: fadein 0.2s ease 0.25s 1 forwards;
        }
        &[data-cell="7"] { 
          animation: fadein 0.2s ease 0.24s 1 forwards;
        }
        &[data-cell="8"] { 
          animation: fadein 0.2s ease 0.23s 1 forwards;
        }
      }
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
  }
  @include mqdown(sm) {
    &__wrapper {
      grid-template-rows: calc((100vw - 48px) / 3) calc((100vw - 48px) / 3) calc((100vw - 48px) / 3);
      grid-template-columns: calc((100vw - 48px) / 3) calc((100vw - 48px) / 3) calc((100vw - 48px) / 3);
      &[data-min=false] {
        grid-template-rows: calc((100vw - 40px) / 3) calc((100vw - 40px) / 3) calc((100vw - 40px) / 3);
        grid-template-columns: calc((100vw - 40px) / 3) calc((100vw - 40px) / 3) calc((100vw - 40px) / 3);
        grid-row-gap: 4px;
        grid-column-gap: 4px;
      }
    }
  }
}
</style>