
<template>
  <div class="join-div">
    <div class="join-form">
      <logo/>
      <el-form :model="form" label-width="auto" style="max-width: 400px">
        <div class="input-div"  :class="{ 'mb-7': isShow }">
          <div class="label">아이디</div>
          <div class="flex-row-center">
            <el-input
                v-model="form.id"
                placeholder="아이디를 입력하세요.(4~16자)"
                maxlength ="16"
                @focus="resetDuplChk"
                />
            <el-button class="confirmBtn bg-gyool-brown gyool-oatmeal" @click="duplicationChk">중복확인</el-button>
          </div>
          <div v-if="isShow" :class="isDuplication? 'gyool-green' : 'gyool-red'" class="dulplChkMsg">{{ duplicationChkMsg}}</div>
        </div>
        <div class="input-div">
          <div class="label">비밀번호</div>
          <el-input v-model="form.password" type="password" placeholder="비밀번호를 입력하세요." show-password/>
        </div>
        <div class="input-div">
          <div class="label">비밀번호 확인</div>
          <el-input v-model="form.pwChk" type="password" placeholder="비밀번호 확인을 입력하세요." show-password/>
        </div>
        <div class="input-div">
          <div class="label">이메일</div>
          <div>
            <el-input v-model="form.email" placeholder="이메일을 입력하세요." />
          </div>

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
import logo from '@/component/Logo.vue'
import {reactive, ref} from 'vue'
import {useRouter} from "vue-router";
import {request} from "@/utils/request"
import {showMsg} from"@/utils/Elmessage"

interface formData {
  id: string;
  password: string;
  pwChk: string;
  email: string;
  name: string;
}

const form = reactive<formData>({
  id :'',
  password:'',
  pwChk:'',
  email:'',
  name:''
})


//경고 message box
const warn = (message: string): boolean => {
  showMsg('warning',message)
  return false
}

//아이디 중복체크
const duplicationChkMsg = ref('');
const isShow = ref(false);
const isDuplication = ref(false);

//아이디 새로 입력시 중복체크 상태값 reset
const resetDuplChk = () =>{
  isShow.value = false;
  isDuplication.value = false;
}


//아이디 중복 체크
const duplicationChk = async () =>{
  let url = '/user/duplication';
  //아이디 유효성 검사
  const isCorrectId = (id: string) : boolean =>{
    return /^[a-z0-9_-]+$/.test(id);
  }


  if (!form.id) return warn('아이디를 입력하세요.');
  if (!isCorrectId(form.id)) return warn('영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
  if ( form.id.length < 4 ) return warn('아이디를 최소4자 이상 입력해주세요');

  const result = await  request({method :'post' , url : url, data:form})

  isShow.value = true;
  isDuplication.value = result;

  if(result){
    duplicationChkMsg.value = '사용가능한 아이디 입니다.';
  }else{
    duplicationChkMsg.value='이미 사용중인 아이디 입니다.';
  }

}

//회원가입
const router = useRouter();
const register = async ()=>{

  let url = '/user/join';
  if(formCheck()){
    const result = await request({method :'post', url: url, data: form})

    showMsg('success','회원가입이 완료되었습니다.')

    router.push({ name: 'Login' })
  }
}

//form 유효성 검사
function formCheck(): boolean {
  //이메일 유효성 검사
  const isEmail = (email: string) : boolean =>{
    return /^[a-z0-9._%+-]{1,}@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/.test(email);
  }

  if (!form.id) return warn('아이디를 입력하세요.')
  if (!isDuplication.value) return warn('아이디 중복확인 해주세요.')
  if (!form.password) return warn('비밀번호를 입력하세요.')
  if (!form.pwChk) return warn('비밀번호 확인을 입력하세요.')
  if (form.password !== form.pwChk) return warn('비밀번호가 일치하지 않습니다.')
  if(!isEmail(form.email)) return warn('정확한 이메일을 입력해주세요.')
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
.join-form{
  background-color: #ffffff;
  display: flex ;
  flex-direction: column;
  align-items: stretch;
  height: 782px;
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
.confirmBtn{
  height: 44px;
  margin-left: 10px;
}
.dulplChkMsg{
  font-size:  13px;
  margin-left: 5px;
}
.mb-7{
  margin-bottom: 7px;
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