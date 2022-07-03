<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const doodle = ref();
const router = useRouter();

const openLoginForm = () => {
  router.push({
    name: "login",
  });
};

// const intId = setInterval(() => {
//   doodle.value.update();
// }, 7000);
//
// doodle.value.style.transition = "all .8s ease";

// onBeforeUnmount(() => {
//   clearInterval(intId);
// });
</script>
<template>
  <section class="flex min-h-screen flex-col items-center p-[20px] lg:flex-row">
    <div class="grow py-[30px]">
      <css-doodle ref="doodle" class="mx-auto h-[400px] w-[80%] max-w-[] grow cursor-pointer" click-to-update>
        @grid: 14 / 80%;
        @random {
        border-left: 1px solid #5d81bc;
        }
        @random {
        border-top: 1px solid #5d81bc;
        }
        @random(.25) {
        background: linear-gradient( @p(#fff, tan, #5d81bc), @lp
        )
        50% / @r(60%) @lr
        no-repeat;
        }
        @random {
        filter: drop-shadow(0 0 10px #fff);
        }
      </css-doodle>
    </div>
    <div class="w-full px-[32px] lg:max-w-[55%]">
      <h1 class="text-xl font-medium">Hello!</h1>
      <div class="py-[32px] text-lg">
        Dear friend, welcome to our social network! Here you can find a lot of interesting content and new friends! Rather join
        us!
      </div>
      <div class="flex flex-row items-center">
        <el-button type="primary" size="large" class="mr-[10px]" @click="openLoginForm()">Log in</el-button>
        <span class="mr-[10px]">OR</span>
        <el-button size="large" type="primary" plain>Sign in</el-button>
      </div>
    </div>
  </section>
</template>
