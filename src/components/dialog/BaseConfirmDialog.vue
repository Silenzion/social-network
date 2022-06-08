<script lang="ts" setup>
import BaseDialog from "@/components/dialog/BaseDialog.vue";

const props = withDefaults(defineProps<{ showButtons?: boolean; title?: string; text?: string; resolve?: any }>(), {
  showButtons: true,
});
</script>

<template>
  <BaseDialog v-slot="slotProps">
    <span v-if="!!props.title" class="el-dialog__title">
      {{ title }}
    </span>
    <div v-if="!!props.text" :class="[!!props.title ? 'my-[20px]' : '', 'grow', 'overflow-y-auto']">
      {{ text }}
    </div>

    <div v-if="props.showButtons" class="flex items-center justify-end">
      <el-button
        type="primary"
        @click="
          () => {
            if (slotProps.close) {
              slotProps.close();
            }
            if (!!props.resolve) {
              props.resolve(true);
            }
          }
        "
        >OK</el-button
      >
      <el-button
        class="ml-[32px]"
        @click="
          () => {
            slotProps.close();
            if (!!props.resolve) {
              props.resolve(false);
            }
          }
        "
        >Cansel</el-button
      >
    </div>
  </BaseDialog>
</template>
