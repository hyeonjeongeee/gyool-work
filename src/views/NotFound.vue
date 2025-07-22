

<template>
  <div class="main">
    <el-image  :src="url" fit="fill" />
  </div>
</template>
<script setup lang="ts">
  import notFound from "@/assets/common/404_notFound.png"

  const url =  notFound;


</script>
<style scoped>
.main{
  display: flex;
  justify-content: center;
  background-color: #fff8cc;
  width: 100%;
  height: 100%;
}
</style>