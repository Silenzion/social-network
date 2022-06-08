<script lang="ts" setup>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
</script>
<template>
  <div class="flex min-h-screen flex-col justify-between">
    <BaseHeader />
    <div class="container">
      <main>
        <slot></slot>
      </main>
    </div>
    <BaseFooter />
  </div>
</template>
