<script lang="ts" setup>
import useVuelidate from "@vuelidate/core";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import ServiceManager from "@/_core/ServiceManager";
import AuthService from "@/modules/User/AuthService";
import LoginData, { validationsRule } from "@/modules/User/models/LoginData";
import { AuthResult, AuthStatusType } from "@/modules/User/models/AuthResult";
import { FormInstance } from "element-plus";

const router = useRouter();
const internalModel = reactive(new LoginData());
const authError = ref(false);
const loginForm = ref<FormInstance>();
const sendForm = async () => {
  if (!loginForm.value) return;
  await loginForm.value.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
  const response: AuthResult = ServiceManager.getInstance().getService(AuthService).login(internalModel);
  if (response.status == AuthStatusType.OK) {
    router.push({
      name: "user-page",
      params: {
        id: ServiceManager.getInstance().getService(AuthService).getCurrentUser().id,
      },
    });
  } else {
    authError.value = true;
    console.log(response);
  }
};
</script>
<template>
  <main class="flex min-h-[100vh] items-center justify-center">
    <el-card class="w-full max-w-[400px]">
      <div class="mb-[32px] text-center text-xl">Log in</div>
      <el-form ref="loginForm" :rules="validationsRule" :model="internalModel" status-icon>
        <el-form-item label="Email" prop="email">
          <el-input v-model="internalModel.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="internalModel.password" type="password" autocomplete="off" />
        </el-form-item>
        <div v-if="authError" class="text-red-700">Sorry, user with the credentials not found!</div>
        <el-button type="primary" @click="sendForm()">Log in</el-button>
      </el-form>
    </el-card>
  </main>
</template>
