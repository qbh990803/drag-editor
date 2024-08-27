<template>
  <div class="view-main" @dragover.prevent @drop="onDrop">
    <component
      v-for="(field, index) in list"
      :key="index"
      :is="getComponent(field.name)"
      v-bind="field.props"
      :class="{ selected: selectedComponent?.id === field.id }"
      @click="selectComponent(field)"
    >
      <template
        v-for="(slotContent, slotName) in field.slots"
        v-slot:[slotName]
      >
        {{ slotContent }}
      </template>
    </component>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useEditorStore } from "@/store";
import getComponent from "@/views/render/getComponent";
import { generateUUID } from "@/views/share/utils";

const editorStore = useEditorStore();

const list = ref<any[]>([]);

function onDrop(event: DragEvent) {
  // 获取被拖拽的数据
  if (event.dataTransfer) {
    const item = JSON.parse(event.dataTransfer.getData("text/plain"));
    item.id = generateUUID();
    list.value.push(item);
    selectComponent(item);
    editorStore.addComponent(item);
  }
}

const selectedComponent = computed(() => editorStore.getSelectedComponent);
function selectComponent(field: any) {
  editorStore.setSelectedComponent(field);
}
</script>

<style lang="scss" scoped>
.view-main {
  width: 100%;
  height: 100%;

  .selected {
    border: 2px solid blue;
  }
}
</style>
