<template>
  <div class="home">
    <ElementLibrary />
    <ViewMain />
    <PropertiesPanel />
  </div>
</template>

<script lang="ts" setup>
import ElementLibrary from "./element-library/ElementLibrary.vue";
import ViewMain from "./view-main/ViewMain.vue";
import PropertiesPanel from "./properties-panel/PropertiesPanel.vue";
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  background-color: #f4f4f4;
  height: 100vh;
  overflow: hidden;
}
</style>
