<template>
  <div class="common-layout">
    <el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">

</script>

<style scoped>
  .el-aside{
    width: 5%;
    background-color: #F0E9DF;
  }
  .el-header{
    background-color: #F0E9DF;
  }
  .el-main{
    background-color: #D19B98;
  }
</style>