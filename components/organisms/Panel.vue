<template>
  <div>
    <!--   3*3
          0 1 2
          3 4 5
          6 7 8   -->
    <div class="o-panel">
      <div class="o-panel__wrapper" v-if="isMin" data-min="true">
        <div class="card" v-for="(cell, index) in cells" :key="cell.id" :data-cell=index :data-animation="isAnimation" v-on:click.self="move(index)" :class="minClasses(index)">
          <span v-if='mainCellVal === "4" && index === "4"' contenteditable="true" class="editor" @focusout="title(index, $event)" v-text="cells[mainCellVal][`${index}`]"></span>
          <span v-else contenteditable="true" class="editor" @focusout="onEdit(index, $event)" v-text="cells[mainCellVal][`${index}`]"></span>
        </div>
      </div>
      <div class="o-panel__wrapper" v-else data-min="false">
        <div class="cards" v-for="(cards, i) in cells" :key="cards.id" :data-animation="isAnimation" :data-card=i>
          <div class="cardCell" v-for="(cell, j) in cards" :key="cell.id" :class="maxClasses(i, j)" :data-cell=j>
            <span class="editor" v-text="cells[i][`${j}`]"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" v-if="isLoading">
      <div class="overlay-loading">
        <svg class="loading__svg" viewBox="-75 -75 150 150">
          <title>Loading</title>
          <circle class="loading__stroke" cx="0" cy="0" r="37.5" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'md-panel',
  props: {
    mainCell: {
      type: String,
      default: "4"
    }
  },
  data () {
    return {
      mainCellVal: this.mainCell,
      isLoading: false,
      isMin: true,
      isAnimation: true,
      isAlreadyCreated: false,
      cells: {
        "0": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "8": ""
        },
        "1": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "8": ""
        },
        "2": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "8": ""
        },
        "3": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "8": ""
        },
        "4": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "メインテーマ",
          "5": "",
          "6": "",
          "7": "",
          "8": ""
        },
        "5": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "8": ""
        },
        "6": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "8": ""
        },
        "7": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "8": ""
        },
        "8": {
          "0": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "",
          "6": "",
          "7": "",
          "8": ""
        }
      }
    }
  },
  methods: {
    // メインテーマ変更
    title(i, e) {
      this.$nuxt.$emit('TITLE', e.target.innerText);
      this.$set(this.cells[this.mainCellVal], i, e.target.innerText);
    },
    move(d) {
      // 中央のセルをタップするとメインテーマに戻る
      if(this.isMin) {
        if(d === "4") {
          this.mainCellVal = "4";
        } else {
          if(this.mainCellVal !== "4") {
            // メインテーマ以外では次のセルへ移動しない
            this.mainCellVal = this.mainCellVal;
          } else {
            // 移動
            this.mainCellVal = d;
            this.isAnimation = false;
          }
        }
      }
    },
    // サブテーマ変更
    onEdit(i, e) {
      if(this.mainCellVal === "4") {
        this.$set(this.cells[i], "4", e.target.innerText);
      }
      this.$set(this.cells[this.mainCellVal], i, e.target.innerText);
    },
    minClasses(i) {
      if(this.mainCellVal === "4" && i !== "4") {
        return "subTheme";
      } else if(this.mainCellVal !== "4" && i === "4") {
        return "subTheme";
      } else if(this.mainCellVal === "4" && i === "4") {
        return "mainTheme";
      }
    },
    maxClasses(i, j) {
      if(i !== "4" && j === "4") {
        return "subTheme";
      } else if(i === "4" && j !== "4") {
        return "subTheme";
      } else if(i === "4" && j === "4") {
        return "mainTheme";
      }
    }
  },
  computed: {
    ...mapGetters({
      data: 'project/getItems'
    })
  },
  created() {
    this.$nuxt.$on('SAVE', title => {
      if(this.isAlreadyCreated) {
        this.$store.dispatch('project/update', {index:this.$route.query.project, title:title, data:JSON.stringify(this.cells)})
      } else {
        this.$store.dispatch('project/save', {title:title, data:JSON.stringify(this.cells)})
      }
      this.isLoading = true;
      // 擬似ローディング
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push('/')
      }, 1000)
    });
    this.$nuxt.$on('SCALE', () => {
      this.isMin = !this.isMin;
      this.isAnimation = false;
    });
  },
  mounted() {
    if(this.$route.query.project) {
      var cellData = this.data[this.$route.query.project]["data"];
      this.cells = JSON.parse(cellData);
      this.$nuxt.$emit('TITLE', this.cells["4"]["4"]);
      this.isAlreadyCreated = true;
    }
  },
  beforeDestroy() {
    this.$nuxt.$off('SAVE');
    this.$nuxt.$off('SCALE');
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
  height: calc(100vh - 96px);
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