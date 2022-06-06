<script setup lang="ts">
import { Message, Delete, Edit, Share } from "@element-plus/icons-vue";
import { ref } from "vue";
import ServiceManager from "@/_core/ServiceManager";
import UserService from "@/modules/User/UserService";
import UserModel from "@/modules/User/models/UserModel";

const props = defineProps<{
  id: number | string;
}>();

const user = ref(new UserModel());

const getUser = () => {
  user.value = ServiceManager.getInstance().getService(UserService).getUser();
};

const loading = ref(false);

getUser();
</script>
<template>
  <el-card class="mb-[20px]">
    <div class="flex flex-row">
      <el-avatar class="mr-[10px]" :size="150" :src="user.avatar" />
      <div class="grid grid-cols-2">
        <div>Username:</div>
        <div>{{ user.name }} {{ user.surname }}</div>
        <div>Age:</div>
        <div>{{ user.age }}</div>
      </div>
    </div>
    <el-row class="mb-4 pt-[20px]">
      <el-button type="primary" :loading="loading" :icon="Message">Send message</el-button>
    </el-row>
  </el-card>
  <el-card>
    <div class="mb-[20px] uppercase">User feed</div>
    <el-button-group class="ml-4">
      <el-button type="primary" :icon="Edit" />
      <el-button type="primary" :icon="Share" @click="navigator.share({ text: 'Omg,its working!' })" />
      <el-button type="primary" :icon="Delete" />
    </el-button-group>
  </el-card>
</template>
