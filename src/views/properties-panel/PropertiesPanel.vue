<template>
  <div class="property-config">
    <ComponentObject />
    <PropertiesConfig />
  </div>
</template>

<script setup lang="ts">
import {} from "vue";
import ComponentObject from "./ComponentObject.vue";
import PropertiesConfig from "./PropertiesConfig.vue";
</script>

<style lang="scss" scoped>
.property-config {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px #dad7d7;
}
</style>
