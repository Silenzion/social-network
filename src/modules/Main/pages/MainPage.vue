<template>
  <el-card class="p-[20px]">
    <div class="flex flex-row">
      <!--      <div class="relative w-[40%] text-clip bg-blue-500">-->
      <css-doodle class="relative w-[280px] overflow-clip bg-blue-500">
        :doodle {
        @grid: 1x3 ;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0; }
        @size: 100% 150%;
        position: absolute;
        background: @m(100, ( linear-gradient(transparent, @p( #FFFDE1@repeat(2, @p([0-9a-f])), #FB3569@repeat(2, @p([0-9a-f])) ))
        @r(0%, 100%) @r(0%, 100%) / @r(1px) @r(23vmin) no-repeat ));
        will-change: transform; animation: f 20s linear calc(-20s /
        @size() * @i()) infinite;
        @keyframes f { from { transform: translateY(-100%) } to { transform: translateY(100%) } }
      </css-doodle>
      <!--      </div>-->

      <div class="px-[32px]">
        <h1 class="text-xl font-medium">Hello!</h1>
        <div class="py-[32px] text-lg">
          Dear friend, welcome to our social network! Here you can find a lot of interesting content and new friends! Rather join
          us!
        </div>
        <div class="flex flex-row items-center justify-end">
          <el-button type="primary" class="mr-[10px]">Log in</el-button>
          <span class="mr-[10px]">OR</span>
          <el-button type="primary" plain>Sign in</el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>
