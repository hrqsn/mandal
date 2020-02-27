<template>
  <div class="o-panel">
    <div class="o-panel__wrapper">
      <div class="card" data-animation="8">
        <span contenteditable="true">{{ data["0"]["8"] }}</span>
      </div>
      <div class="card" data-animation="1">
        <span contenteditable="true">{{ data["0"]["1"] }}</span>
      </div>
      <div class="card" data-animation="2">
        <span contenteditable="true">{{ data["0"]["2"] }}</span>
      </div>
      <div class="card" data-animation="7">
        <span contenteditable="true">{{ data["0"]["7"] }}</span>
      </div>
      <div class="card" data-animation="0">
        <span contenteditable="true" @input="title">{{ data["0"]["0"] }}</span>
      </div>
      <div class="card" data-animation="3">
        <span contenteditable="true">{{ data["0"]["3"] }}</span>
      </div>
      <div class="card" data-animation="6">
        <span contenteditable="true">{{ data["0"]["6"] }}</span>
      </div>
      <div class="card" data-animation="5">
        <span contenteditable="true">{{ data["0"]["5"] }}</span>
      </div>
      <div class="card" data-animation="4">
        <span contenteditable="true">{{ data["0"]["4"] }}</span>
      </div>
      <!--   3*3
            8 1 2
            7 0 3
            6 5 4   -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'md-panel',
  data () {
    return {
      data: {
        "0": {
          "0": "メインテーマ",
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
          "4": "",
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
    title(e) {
      this.$nuxt.$emit('TITLE', e.target.innerText);
    }
  }
}
</script>

<style scoped lang="scss">
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
    .card {
      background-color: $gray-10;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      opacity: 0;  
      cursor: pointer;
      span {
        cursor: text;
        width: 100%;
      }
      &[data-animation="0"] { 
        animation: fadein 0s ease 0.0001s 1 forwards;
      }
      &[data-animation="1"] { 
        animation: fadein 0.2s ease 0.2s 1 forwards;
      }
      &[data-animation="2"] { 
        animation: fadein 0.2s ease 0.26s 1 forwards;
      }
      &[data-animation="3"] { 
        animation: fadein 0.2s ease 0.2s 1 forwards;
      }
      &[data-animation="4"] { 
        animation: fadein 0.2s ease 0.26s 1 forwards;
      }
      &[data-animation="5"] { 
        animation: fadein 0.2s ease 0.2s 1 forwards;
      }
      &[data-animation="6"] { 
        animation: fadein 0.2s ease 0.26s 1 forwards;
      }
      &[data-animation="7"] { 
        animation: fadein 0.2s ease 0.2s 1 forwards;
      }
      &[data-animation="8"] { 
        animation: fadein 0.2s ease 0.26s 1 forwards;
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
    }
  }
}
</style>