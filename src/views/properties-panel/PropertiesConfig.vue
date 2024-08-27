<template>
  <NCard
    title="属性配置"
    :segmented="{
      content: true,
    }"
    size="small"
    style="height: 50%; overflow: hidden"
  >
    <!-- <NForm ref="formRef" :model="model" :rules="rules">
      <NFormItem path="age" label="年龄">
        <NInput v-model:value="model.age" @keydown.enter.prevent />
      </NFormItem>
    </NForm> -->
    <NEmpty v-if="!selectComponent?.id" style="margin-top: 6rem" />
  </NCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { NCard, NEmpty, NForm, NFormItem, NInput } from "naive-ui";
import { useEditorStore } from "@/store";

const editorStore = useEditorStore();

const selectedComponent = computed(() => editorStore.getSelectedComponent);
</script>

<style lang="scss" scoped>
:deep(.n-card__content) {
  overflow-y: auto;
}
</style>
