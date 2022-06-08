<template>
  <el-card class="overflow-y-visible p-[20px]">
    <div class="flex flex-col lg:flex-row">
    <div class="grow bg-blue-600 py-[30px]">
      <css-doodle class="grow h-[400px] mx-auto w-[80%] max-w-[] " grid="1x18">
          :doodle {
           max-height: 60vw;
          }
          @place-cell: center;
          @size: calc(@i()*6%);
          border-radius: 50%;
          border-style: dashed;
          border-width: calc(@i() * 2px);
          border-color: hsla(
          @rand(150, 180), 100%, 50%,
          calc(3 / @i() * .8)
          );
          @keyframes changeRotate {
          from {
          transform: rotate(@r(360deg));
          }
          to {
          transform: rotate(@r(0deg));
          }
          }
          animation-duration: calc(2s * @i());
          animation-name: changeRotate;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-delay: calc(0.08s * @i());
          @at(1, 13) {
          border-style: dotted;
          border-color: hsla(
          190, 70%, 50%, 90%
          );
          }
          @at(1, 17) {
          border-style: dotted;
          border-color: hsla(
          190, 70%, 50%, 90%
          );
          }
      </css-doodle>
    </div>
      <div class="w-full max-w-[55%] px-[32px]">
        <h1 class="text-xl font-medium">Hello!</h1>
        <div class="py-[32px] text-lg">
          Dear friend, welcome to our social network! Here you can find a lot of interesting content and new friends! Rather join
          us!
        </div>
        <div class="flex flex-row items-center">
          <el-button type="primary" class="mr-[10px]">Log in</el-button>
          <span class="mr-[10px]">OR</span>
          <el-button type="primary" plain>Sign in</el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>
