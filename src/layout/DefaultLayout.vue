<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AsideMenu />
      </el-aside>
      <el-container>
<!--        <el-header>Header</el-header>-->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import AsideMenu from '@/layout/AsideMenu.vue';
</script>

<style scoped>
  .el-aside{
    width: 5%;
  }
  .el-main {
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
</style>