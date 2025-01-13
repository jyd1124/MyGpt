<template>
  <el-container style="height: 100vh;">
    <!-- 侧边栏 -->
    <el-aside width="200px" style="background-color: #304156;">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><document /></el-icon>
          <span>文档</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><setting /></el-icon>
          <span>设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 顶部导航栏 -->
      <el-header style="background-color: #409EFF; color: #fff; display: flex; align-items: center;">
        <span style="font-size: 20px; font-weight: bold;">DeepSeek 示例</span>
        <el-button type="primary" style="margin-left: auto;">登录</el-button>
      </el-header>

      <!-- 主内容区域 -->
      <el-main>
        <el-card>
          <template #header>
            <div style="font-size: 18px; font-weight: bold;">欢迎使用 DeepSeek</div>
          </template>
          <p>这是一个简单的示例界面，使用 Element Plus 和 Vue 3 构建。</p>
          <el-button type="primary" @click="handleClick">点击我</el-button>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { Menu as IconMenu, Document, Setting } from '@element-plus/icons-vue';

const handleClick = () => {
  ElMessage.success('按钮被点击了！');
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>