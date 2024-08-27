<template>
  <NCard
    title="组件对象"
    :segmented="{
      content: true,
    }"
    size="small"
    style="height: 50%; overflow: hidden"
  >
    <div
      v-for="item in comObjectList"
      :key="item.id"
      quaternary
      style=""
      :class="{ item: true, item__selected: item.id === selectedComponent?.id }"
      @click="selectComObject(item)"
    >
      {{ item.name }}
    </div>
    <NEmpty v-if="!comObjectList.length" style="margin-top: 6rem" />
  </NCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { NCard, NEmpty } from "naive-ui";
import { useEditorStore } from "@/store";

const editorStore = useEditorStore();

const comObjectList = computed(() => editorStore.getComponents);
const selectedComponent = computed(() => editorStore.getSelectedComponent);

function selectComObject(item: any) {
  editorStore.setSelectedComponent(item);
}
</script>

<style lang="scss" scoped>
:deep(.n-card__content) {
  overflow-y: auto;
  .item {
    padding: 0 14px;
    line-height: 34px;
    cursor: pointer;
    border-radius: 3px;
    &__selected {
      background-color: rgba(46, 51, 56, 0.13);
    }
  }
}
</style>
