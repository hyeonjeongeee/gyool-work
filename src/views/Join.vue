
<template>
  <div class="join-div">
    <div class="join-form">
      <div class="logo-div">
        <el-image style="width: 100%; height: 100%" :src="logo" fit="contain"/>
      </div>
      <el-form :model="form" label-width="auto" style="max-width: 400px">
        <div class="input-div">
          <div class="label">아이디</div>
          <el-input v-model="form.id" placeholder="아이디를 입력하세요." />
        </div>
        <div class="input-div">
          <div class="label">비밀번호</div>
          <el-input v-model="form.pw" type="password" placeholder="비밀번호를 입력하세요." show-password/>
        </div>
        <div class="input-div">
          <div class="label">비밀번호 확인</div>
          <el-input v-model="form.pwChk" type="password" placeholder="비밀번호 확인을 입력하세요." show-password/>
        </div>
        <div class="input-div">
          <div class="label">이름</div>
          <el-input v-model="form.name" placeholder="이름을 입력하세요." />
        </div>
        <div>
          <el-button class="bg-gyool-green register-btn" @click="register" style="width: 100%">회원가입</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>


  <script setup lang="ts">
  import { reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  import logo from '@/assets/logo/gyool1.png';
  import {useRouter} from "vue-router";

  interface formData {
    id: string;
    pw: string;
    pwChk: string;
    name: string;
  }

  const form = reactive<formData>({
    id :'',
    pw:'',
    pwChk:'',
    name:''
  })

  const router = useRouter();
  const register = ()=>{
    if(formCheck()){
      ElMessage({
        type: 'success',
        message:'회원가입이 완료되었습니다.'
      })

      router.push({ name: 'Login' })
    }
  }

  function formCheck(): boolean {
    const warn = (message: string): boolean => {
      ElMessage({
        type: 'warning',
        message
      })
      return false
    }

    if (!form.id) return warn('아이디를 입력하세요.')
    if (!form.pw) return warn('비밀번호를 입력하세요.')
    if (!form.pwChk) return warn('비밀번호 확인을 입력하세요.')
    if (form.pw !== form.pwChk) return warn('비밀번호가 일치하지 않습니다.')
    if (!form.name) return warn('이름을 입력하세요.')

    return true
  }
  </script>

<style scoped>
.join-div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-div {
  height: 66px;
  width: 100%;
  margin-bottom: 40px;
 }
.join-form{
  background-color: #ffffff;
  display: flex ;
  flex-direction: column;
  align-items: stretch;
  height: 692px;
  width: 500px;
  padding: 60px 50px 70px 50px;
  border-radius: 20px;
  box-shadow: 0px 3px 8px #808080;
}
.label{
  margin-bottom: 10px;
}
.input-div{
  margin-bottom: 20px;
}

.register-btn {
  color: #ffffff;
  font-weight: bold;
  height: 44px;
  margin-top: 20px;
}

.el-input{
  height: 44px;
}
.el-input ::placeholder{
  font-size: 11px;
}
</style>