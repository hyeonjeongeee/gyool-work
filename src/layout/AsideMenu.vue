<template>
  <div class="aside-container">
    <el-menu
        default-active="/notification"
        class="el-menu"
        router
    >
      <el-menu-item
          v-for=" item in menuItems"
          :key ="item.id"
          :index= "item.index" @click="setSelected">
        <img :src="item.src" class="custom-icon" />
        <div :id="item.id" class="selected" v-show="visibleBarId == item.id"></div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus';
import {onMounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router'
import notiImg from '@/assets/aside/notification.png';
import cahtImg from '@/assets/aside/chat.png';
import settingImg from '@/assets/aside/setting.png';
import mypageImg from '@/assets/aside/mypage.png';


const route = useRoute();
const visibleBarId = ref('');

onMounted(()=>{

  setSelected()

})

watch(
    () => route.name,
    (newName) => {
      visibleBarId.value = newName as string ?? ''
    },
    { immediate: true }
)

const menuItems = [
  {index : '/main/notification', src:notiImg, id:'notification'},
  {index : '/main/chat', src:cahtImg, id:'chat'},
  {index : '/main/setting', src:settingImg, id:'setting'},
  {index : '/main/mypage', src:mypageImg, id:'mypage'}
]




const setSelected = ()=>{
  const name = route.name;
  visibleBarId.value = name as string ?? '';
  console.log(visibleBarId.value);
}

</script>

<style scoped>
.aside-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
}
.el-menu {
  background-color: transparent;
}
.el-menu {
  border-right: none;
}
.custom-icon {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
}

.selected{
  border-radius: 20px;
  width: 3px;
  height: 55%;
  background-color: #2c3e5091;
  position: absolute;
  right: 0;
}
</style>