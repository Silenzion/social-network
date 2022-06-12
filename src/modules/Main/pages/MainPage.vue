<script lang="ts" setup>
import { onBeforeUnmount, ref } from "vue";
const doodle = ref();

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

    <div class="flex flex-col items-center lg:flex-row p-[20px]">
      <div class="grow py-[30px]">
        <css-doodle ref="doodle" class="mx-auto h-[400px] w-[80%] max-w-[] grow cursor-pointer" click-to-update>
          @grid: 1x10 / 85%; @position: center; @size: calc(@i * 10%); border-radius: 50%; border-style: dashed; border-width:
          calc(@i * 4px); border-color: hsla( calc(20 * @i), 70%, 68%, calc(5 / @i * .8) ); transform: rotate(@r(360deg));
          <!--          transition: all .8s ease;-->
        </css-doodle>
      </div>
      <div class="w-full px-[32px] lg:max-w-[55%]">
        <h1 class="text-xl font-medium">Hello!</h1>
        <div class="py-[32px] text-lg">
          Dear friend, welcome to our social network! Here you can find a lot of interesting content and new friends! Rather join
          us!
        </div>
        <div class="flex flex-row items-center">
          <el-button type="primary" size="large" class="mr-[10px]">Log in</el-button>
          <span class="mr-[10px]">OR</span>
          <el-button size="large" type="primary" plain>Sign in</el-button>
        </div>
      </div>
    </div>
</template>
