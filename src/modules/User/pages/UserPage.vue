<script setup lang="ts">
import { Message, Delete, Edit, Share, Bell } from "@element-plus/icons-vue";
import { inject, ref } from "vue";
import ServiceManager from "@/_core/ServiceManager";
import AuthService from "@/modules/User/AuthService";
import UserModel from "@/modules/User/models/UserModel";
import BaseConfirmDialog from "@/components/dialog/BaseConfirmDialog.vue";
import { VueFinalModalProperty } from "vue-final-modal";

const props = defineProps<{
  id: number | string;
}>();

const $vfm: VueFinalModalProperty | undefined = inject("$vfm");

const loading = ref(false);
const user = ref(new UserModel());

const getUser = () => {
  user.value = ServiceManager.getInstance().getService(AuthService).getCurrentUser();
};

const openDialog = async () => {
  return new Promise((resolve) => {
    $vfm?.show({
      component: BaseConfirmDialog,
      bind: { showButtons: true, resolve, title: "Delete", text: "Confirm delete !" },
    });
  });
};

const openConfirmDialog = async () => {
  const result = await openDialog();
  if (result) {
    //  something
  }
};

const doShare = () => {
  navigator.share({ text: "Omg,its working!" });
};

getUser();
</script>
<template>
  <el-card class="mb-[20px]">
    <div class="flex flex-row items-start">
      <div class="mb-4 grid grid-cols-1 gap-[10px] py-[20px]">
        <el-avatar class="mb-[10px]" :size="150" :src="user.avatar" />
        <el-button type="primary" :loading="loading" :icon="Message">Send message</el-button>
        <!--      Todo:change icon if user is subscrabe-->
        <el-button class="!ml-[0px]" type="primary" plain :loading="loading" :icon="Bell">Subscribe</el-button>
      </div>
      <div>
        <div>
          <div>{{ user.name }} {{ user.surname }}</div>
        </div>
        <div class="grid grid-cols-2">
          <div>Username:</div>
          <div>Age:</div>
          <div>{{ user.age }}</div>
          <div>City:</div>
          <div>{{ user.city.name }}</div>
        </div>
      </div>
    </div>
  </el-card>
  <el-card>
    <div class="mb-[20px] uppercase">User feed</div>
    <el-button-group class="ml-4">
      <el-button type="primary" :icon="Edit" />
      <el-button type="primary" :icon="Share" @click="doShare()" />
      <el-button type="primary" :icon="Delete" @click="openConfirmDialog()" />
    </el-button-group>
  </el-card>
</template>
