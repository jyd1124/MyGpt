<script setup>
import MyLayout from "@/components/layout.vue";
import MySideMenu from "@/components/sideMenu.vue"
</script>



<template>
  <div>
    <el-container style="height: auto">
      <el-aside width="200px">
        <MySideMenu></MySideMenu>
      </el-aside>
      <el-container>
        <el-header style="background-color: #4385c5"></el-header>
        <el-main style="height: 500px">
          Main
          <MyLayout></MyLayout>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>