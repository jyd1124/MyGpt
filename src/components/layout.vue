<template>
  <el-row :gutter="20">
    <el-col :span="16">1<div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="8">2<div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="8">3<div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="8">4<div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4">5<div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4">6<div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="4">7<div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="16">8<div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4">9<div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
</template>

<script>

</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

:root {
  --ep-c-bg-row: #f9fafc;
  --ep-c-bg-purple: #d3dce6;
  --ep-c-bg-purple-dark: #99a9bf;
  --ep-c-bg-purple-light: #e5e9f2;
}

.dark {
  --ep-c-bg-row: #18191a;
  --ep-c-bg-purple: #46494d;
  --ep-c-bg-purple-dark: #242526;
  --ep-c-bg-purple-light: #667180;
}

.row-bg {
  padding: 10px 0;
  background-color: var(--ep-c-bg-row);
}

.ep-bg-purple-dark {
  background: var(--ep-c-bg-purple-dark);
}

.ep-bg-purple {
  background: var(--ep-c-bg-purple);
}

.ep-bg-purple-light {
  background: var(--ep-c-bg-purple-light);
}
</style>