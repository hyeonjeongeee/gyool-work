<template>
  <div class="aside-container">
    <el-menu
        default-active="/notification"
        class="el-menu"
        router
    >
      <el-menu-item index="/notification">
        <img src="@/assets/aside/notification.png" class="custom-icon" />
      </el-menu-item>
      <el-menu-item index="/members">
        <img src="@/assets/aside/chat.png" class="custom-icon" />
      </el-menu-item>
      <el-menu-item index="/setting">
        <img src="@/assets/aside/setting.png" class="custom-icon" />
      </el-menu-item>
      <el-menu-item index="/mypage">
        <img src="@/assets/aside/mypage.png" class="custom-icon" />
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus'
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
</style>