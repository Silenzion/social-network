<template>
  <div class="container">
    <el-header>Header</el-header>
    <el-main
      >Main
      <transition>
        <router-view></router-view>
      </transition>
    </el-main>
    <el-footer>Footer</el-footer>
  </div>
</template>
