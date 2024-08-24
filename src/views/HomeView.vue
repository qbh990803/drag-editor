<template>
  <div class="home">
    <ComLib />
    <ViewMain />
    <PropertyConfig />
  </div>
</template>

<script lang="ts" setup>
import ComLib from "./com-lib/ComLib.vue";
import ViewMain from "./view-main/ViewMain.vue";
import PropertyConfig from "./property-config/PropertyConfig.vue";
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  background-color: #f4f4f4;
  height: 100vh;
  overflow: hidden;
}
</style>
