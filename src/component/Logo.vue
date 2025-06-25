
<template>
  <div class="logo-div">
    <el-image style="width: 100%; height: 100%" :src="logo" fit="contain" @click="goMain"/>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo/gyool1.png';
import {useRouter} from 'vue-router';

const router = useRouter();

//메인 페이지 이동
const goMain = () =>{
  router.push('/')
}

</script>


<style scoped>
.logo-div {
  height: 66px;
  width: 100%;
  margin-bottom: 40px;
}
.logo-div:hover{
  cursor: pointer;
}
</style>