<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <router-view />
  </n-config-provider>
</template>

<script lang="ts" setup>
import { dateZhCN, zhCN, NConfigProvider } from "naive-ui";
</script>

<style lang="scss"></style>
