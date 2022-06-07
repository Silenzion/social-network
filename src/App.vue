<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed, defineAsyncComponent, markRaw, ref, watch } from "vue";
import PageLayout from "./layouts/PageLayout.vue";
// import EmptyLayout from "./layouts/EmptyLayout.vue";

const route = useRoute();

const layout = computed(() => {
  return route.meta?.layout || PageLayout;
});
</script>
<template>
  <component :is="layout"> </component>
</template>
