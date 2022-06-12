<script lang="ts" setup>
import useVuelidate from "@vuelidate/core";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import ServiceManager from "@/_core/ServiceManager";
import AuthService from "@/modules/User/AuthService";
import LoginData, { validationsRule } from "@/modules/User/models/LoginData";
import { AuthResult, AuthStatusType } from "@/modules/User/models/AuthResult";

const router = useRouter();
const internalModel = reactive(new LoginData());
const v$ = useVuelidate(validationsRule(), internalModel);

const sendForm = () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    return;
  }
  const response: AuthResult = ServiceManager.getInstance().getService(AuthService).login(internalModel);

  if (response.status == AuthStatusType.OK) {
    router.push({
      name: "user-page",
      params: {
        id: ServiceManager.getInstance().getService(AuthService).getCurrentUser().id,
      },
    });
  } else {
    console.log(response);
  }
};
</script>
<template>
  <main class="flex h-full items-center justify-center">
    <el-card>
      <el-form :rules="validationsRule()">
        <el-form-item label="Please input email">
          <el-input v-model="internalModel.email" @blur="v$.phone.$touch()"></el-input>
        </el-form-item>
        <el-form-item label="Please input password">
          <el-input v-model="internalModel.password" @blur="v$.phone.$touch()" />
        </el-form-item>
        <el-button type="primary" @click="sendForm()">Log in</el-button>
      </el-form>
    </el-card>
  </main>
</template>
