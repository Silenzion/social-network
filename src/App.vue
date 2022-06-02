<script lang="ts" setup>
import { useRoute } from "vue-router";
import { defineAsyncComponent, markRaw, ref, watch } from "vue";
import LayoutModel from "@/_core/models/LayoutModel";

const route = useRoute();
const defaultLayoutName = LayoutModel.PAGE;
const defaultLayout = defineAsyncComponent({
  loader: () => import(`./assets/layouts/${defaultLayoutName}.vue`),
});
const layout = ref();

watch(
  () => route.meta?.layout,
  async () => {
    try {
      const component = await import(`./assets/layouts/${route.meta?.layout || defaultLayoutName}.vue`);
      layout.value = markRaw(component);
    } catch {
      layout.value = markRaw(defaultLayout);
    }
  },
  { immediate: true }
);
</script>
<template>
  <component :is="layout"></component>
</template>
