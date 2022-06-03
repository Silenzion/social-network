<script setup lang="ts">
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

getUser();
</script>
<template>
  <div>Username: {{ user.name }} {{ user.surname }}</div>
</template>
