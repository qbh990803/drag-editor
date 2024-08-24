<template>
  <div class="com-lib">
    <n-collapse>
      <n-collapse-item title="青铜" name="1">
        <ComA />
        <ComB />
      </n-collapse-item>
      <n-collapse-item title="白银" name="2">
        <div>很好</div>
      </n-collapse-item>
      <n-collapse-item title="黄金" name="3">
        <div>真棒</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup lang="ts">
import { NCollapse, NCollapseItem } from "naive-ui";
import { useDraggable } from "vue-draggable-plus";
import ComA from "./ComA.vue";
import ComB from "./ComB.vue";
</script>

<style lang="scss" scoped>
.com-lib {
  padding: 16px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #d9d9d9;
}
</style>
