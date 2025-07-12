
<template>
  <div class="login-div">
    <div class="login-form">
      <logo/>
      <el-form :model="form" label-width="auto" style="max-width: 400px">
        <div class="input-div">
          <div class="label">아이디</div>
          <el-input v-model="form.id" placeholder="아이디를 입력하세요." />
        </div>
        <div class="input-div">
          <div class="label">비밀번호</div>
          <el-input v-model="form.password" type="password" placeholder="비밀번호를 입력하세요." show-password/>
        </div>
        <div class="row-space-between">
          <el-checkbox v-model="rememberId">ID 기억하기</el-checkbox>
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
  import {onMounted, reactive} from 'vue'
  import logo from "@/component/Logo.vue"
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import {showMsg} from"@/utils/Elmessage"
  import {request} from "@/utils/request.ts";

  //타입지정
  interface formData {
    id: string;
    password: string;
  }

  const form = reactive<formData>({
    id :'',
    password:''
  })

  //아이디 기억하기

  const rememberId = ref(false);
  onMounted(()=>{
    const savedId =  localStorage.getItem("remember") ?? '';
    if(savedId != ''){
      rememberId.value = true;
      form.id = savedId;
    }
  })


  //경고 message box
  const warn = (message: string): boolean => {
    showMsg('warning',message)
    return false
  }

  const router = useRouter()

  const login = async () =>{
    console.log("로그인");

    let url = '/login';
    let method = 'post';

    const isCorrectId = (id: string) : boolean =>{
      return /^[a-z0-9_-]+$/.test(id);
    }


    if (!form.id) return warn('아이디를 입력하세요.');
    if (!isCorrectId(form.id)) return warn('영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');

    const result = await  request({method : method , url : url, data:form})
    console.log(result)
    if (result && result.token) {
      // ✅ 토큰 저장
      localStorage.setItem("accessToken", result.token);

      if(result.user.companyId !== null) {
        router.push('/main');
      }else {
        router.push('/main/companyCreate');
      }

    } else {
      warn('로그인 실패: 토큰을 받지 못했습니다.');
    }

    if(rememberId.value) {
      localStorage.setItem("remember",form.id);
    }else{
      localStorage.removeItem("remember")
    }
  }
  const register = ()=>{
    console.log("회원가입");
    router.push({ name: 'Join' })
  }
  const findPassword= () =>{
    console.log("비밀번호 찾기")
    router.push({ name: 'FindPassword' })
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
.login-form{
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
.login-btn{
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 13px;
  height: 44px;
}
.register-btn {
  color: #000000;
  font-weight: bold;
  height: 44px;
}
.row-space-between{
  display: flex;
  height: 24.41px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.el-input{
  height: 44px;
}
.el-input ::placeholder{
  font-size: 11px;
}
</style>