<template>
  <div class="o-panel">
    <div class="o-panel__wrapper">
      <div class="card">
        <span></span>
      </div>
      <div class="card">
        <span></span>
      </div>
      <div class="card">
        <span></span>
      </div>
      <div class="card">
        <span></span>
      </div>
      <div class="card">
        <span>コミュニティ</span>
      </div>
      <div class="card">
        <span></span>
      </div>
      <div class="card">
        <span></span>
      </div>
      <div class="card">
        <span></span>
      </div>
      <div class="card">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'md-panel'
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