
<template>
  <div class="login-div">
    <div class="login-form">
      <div class="logo-div">
        <el-image style="width: 100%; height: 100%" :src="logo" fit="contain"/>
      </div>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <div class="input-div">
          <div class="label">아이디</div>
          <el-input v-model="form.id" placeholder="아이디를 입력하세요."/>
        </div>
        <div class="input-div">
          <div class="label">비밀번호</div>
          <el-input v-model="form.pw" type="password" placeholder="비밀번호를 입력하세요." show-password/>
        </div>
        <div class="row-space-between">
          <el-checkbox v-model="checked"  size="small">ID 기억하기</el-checkbox>
          <el-link  @click="findPassword" underline="hover" type="default">비밀번호 찾기</el-link>
        </div>
        <div>
          <el-button class="bg-gyool-green login-btn" @click="login" style="width: 100%">로그인</el-button>
        </div>
        <div>
          <el-button class="bg-gyool-oatmeal register-btn" @click="register" style="width: 100%">회원가입</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>


  <script setup lang="ts">
  import { reactive } from 'vue'

  import logo from '@/assets/logo/gyool1.png';
  import { ref } from 'vue'

  const checked = ref(false);
  const form = reactive({
    id :'',
    pw:''
  })

  const login = ()=>{
    console.log("로그인");
  }
  const register = ()=>{
    console.log("회원가입");
  }
  const findPassword= () =>{
    console.log("비밀번호 찾기")
  }
  </script>

<style scoped>
.login-div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-div {
  height: 20%;
  width: 100%;
  margin-bottom: 10%;
 }
.login-form{
  background-color: #ffffff;
  max-width: 400px;
  min-width: 300px;
  display: flex ;
  flex-direction: column;
  align-items: stretch;
  height: 55%;
  width: 25%;
  padding: 50px;
  border-radius: 1.6rem;
  box-shadow: 0px 3px 8px #808080;
}
.input-div{
  margin-bottom: 20px;
}
.login-btn{
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 13px;
}
.register-btn {
  color: #000000;
  font-weight: bold;
}
.row-space-between{
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  align-content: center;
  margin-bottom: 40px;
}
.el-input ::placeholder{
  font-size: 11px;
}
.el-link {
  font-size: 12px;
}
</style>