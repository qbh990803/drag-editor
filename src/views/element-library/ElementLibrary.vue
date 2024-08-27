<template>
  <div class="com-lib">
    <n-collapse>
      <n-collapse-item title="青铜" name="1">
        <NGrid x-gap="12" :cols="2">
          <NGridItem
            v-for="(item, index) in list1"
            :key="index"
            draggable="true"
            @dragstart="onDragStart(item, $event)"
          >
            <NButton style="width: 100%">{{ item.name }}</NButton>
          </NGridItem>
          <!-- <NGridItem>
            <NButton style="width: 100%">input</NButton>
          </NGridItem> -->
        </NGrid>
      </n-collapse-item>
      <n-collapse-item title="白银" name="2">
        <NGrid x-gap="12" :cols="2">
          <NGridItem>
            <NButton style="width: 100%">avatar</NButton>
          </NGridItem>
        </NGrid>
      </n-collapse-item>
      <n-collapse-item title="黄金" name="3">
        <NGrid x-gap="12" :cols="2">
          <NGridItem>
            <NButton style="width: 100%">card</NButton>
          </NGridItem>
        </NGrid>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NCollapse, NCollapseItem, NButton, NGrid, NGridItem } from "naive-ui";
import { useEditorStore } from "@/store";

const editorStore = useEditorStore();

const list1 = ref([
  {
    name: "Button",
    id: "1",
    props: {
      type: "primary",
      size: "medium",
    },
    slots: {
      default: "button",
    },
  },
  {
    name: "Input",
    id: "2",
    props: {
      type: "text",
      placeholder: "Enter text",
    },
  },
]);

function onDragStart(data: any, event: DragEvent) {
  // 保存被拖拽的数据
  const json = JSON.stringify(data);
  if (event.dataTransfer) {
    event.dataTransfer.setData("text/plain", json);
  }
}
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
