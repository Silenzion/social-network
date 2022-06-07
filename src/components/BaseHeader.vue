<script lang="ts" setup>
import { ElementPlus, Search } from "@element-plus/icons-vue";
import { ref } from "vue";

const searchQuery = ref("");
</script>
<template>
  <header class="bg-primary">
    <div class="container flex items-center justify-between p-[20px] text-white">
      <div class="flex items-center">
        <el-icon :size="30" class="mr-[20px]"><ElementPlus /></el-icon>
        <el-input v-model="searchQuery" class="m-2 !w-[280px]" placeholder="Type something" :prefix-icon="Search" />
      </div>
      <el-button type="primary" plain>Log in</el-button>
    </div>
  </header>
</template>
