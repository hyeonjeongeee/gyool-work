
<template>
  <div class="login-div">
    <el-form :model="form" label-width="auto" style="max-width: 600px" class="login-form">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity pw">
        <el-input v-model="form.pw" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    </div>
  </template>


  <script setup lang="ts">
  import { reactive } from 'vue'

  // do not use same name with ref
  const form = reactive({
    name: '',
    pw:''
  })
  </script>

<style scoped>
.login-div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form{
  background-color: #ffffff;
  max-width: 600px;
  display: flex ;
  flex-direction: column;
  align-items: stretch;
  height: 55%;
  width: 25%;
  padding: 50px;
  border-radius: 1.6rem;
  box-shadow: 0px 3px 8px #808080;
}
</style>