<script lang="ts" setup>
import { Close } from "@element-plus/icons-vue";
const props = withDefaults(defineProps<{ showClose?: boolean }>(), { showClose: true });
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <vue-final-modal
    v-slot="{ close }"
    v-bind="$attrs"
    :z-index-base="1000"
    classes="relative flex justify-center items-center"
    content-class="relative flex flex-col max-h-[90vh] mx-[4px] p-[18px] border rounded bg-white max-w-[1400px] min-w-[280px]"
  >
    <div class="grow overflow-y-auto">
      <slot :attrs="$attrs" :close="close"></slot>
    </div>

    <el-icon
      v-if="props.showClose"
      class="!absolute top-[10px] right-[10px] hover:cursor-pointer"
      @click="
        () => {
          close();
        }
      "
      ><Close
    /></el-icon>
  </vue-final-modal>
</template>
