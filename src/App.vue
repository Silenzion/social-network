<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import PageLayout from "./layouts/PageLayout.vue";
//@ts-ignore
import { ModalsContainer } from "vue-final-modal";

const route = useRoute();

const layout = computed(() => {
  return route?.name ? route.meta?.layout || PageLayout : false;
});
</script>
<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
  <modals-container></modals-container>
</template>
