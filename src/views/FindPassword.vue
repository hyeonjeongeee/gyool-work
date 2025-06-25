
<template>
  <div class="findPassword-div">
    <div class="findPassword-form">
      <div class="logo-div">
        <el-image style="width: 100%; height: 100%" :src="logo" fit="contain"/>
      </div>
      <el-form :model="form" label-width="auto" style="max-width: 400px">
        <div class="input-div">
          <div class="label">아이디</div>
          <el-input v-model="form.id" placeholder="아이디를 입력하세요." />
        </div>
        <div class="input-div">
          <div class="label">이메일</div>
          <div class="flex-row-center">
            <el-input class="email-input" v-model="form.email" placeholder="이메일을 입력하세요." />
            <el-button class="bg-gyool-brown confirmBtn" @click="confirmEmail">인증하기</el-button>
          </div>
        </div>
        <div class="input-div" v-if="isConfirm">
          <div class="label">인증번호</div>
          <div class="flex-row-center">
            <el-input v-model="form.confirmNum" placeholder="인증번호를 입력하세요." />
            <el-button class="bg-gyool-brown confirmBtn" @click="confirmEmail">확인</el-button>
          </div>


        </div>
        <div>
          <el-button class="bg-gyool-green register-btn" @click="findPassword" style="width: 100%">비밀번호 찾기</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>


  <script setup lang="ts">
  import {reactive, ref} from 'vue'
  import logo from '@/assets/logo/gyool1.png';
  import {useRouter} from "vue-router";
  import {request} from "@/utils/request"
  import {showMsg} from "@/utils/Elmessage"

  interface formData {
    id: string;
    email: string;
    confirmNum: string;
  }

  const form = reactive<formData>({
    id :'',
    email:'',
    confirmNum:''
  })

  const router = useRouter();

  const isConfirm = ref(false);

  const confirmEmail = async () => {
    console.log("아이디 찾기")

    let url = '/user/confirmEmail'
    let method = 'post';

    if(formCheck()){
      const result = await request({method : method, url: url, data: form})
      //result 결과에 따른 메세지 셋팅 (전송 오류, 정상 전송)
      //isConfirm.value= true;
      //showMsg('success','이메일 전송이 완료되었습니다.')
    }
  }

  const findPassword = async ()=>{
    
    let url = '/user/findPassword';
    let method = 'post';

    if(formCheck()){
      const result = await request({method : method, url: url, data: form})

    }
  }

  function formCheck(): boolean {
    const warn = (message: string): boolean => {
      showMsg('warning',message)
      return false
    }

    //이메일 유효성 검사
    const isEmail = (email: string) : boolean =>{
      return /^[a-z0-9._%+-]{1,}@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/.test(email);
    }

    if (!form.id) return warn('아이디를 입력하세요.')
    if(!isEmail(form.email)) return warn('정확한 이메일을 입력해주세요.')
    if(!isConfirm) return warn('이메일인증을 진행해주세요.')

    return true
  }
  </script>

<style scoped>
.findPassword-div {
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
.findPassword-form{
  background-color: #ffffff;
  display: flex ;
  flex-direction: column;
  align-items: stretch;
  height: 598px;
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
.confirmBtn{
  color: #ffffff;
  font-weight: bold;
  height: 44px;
  margin-left: 10px;
}
.el-input ::placeholder{
  font-size: 11px;
}
</style>