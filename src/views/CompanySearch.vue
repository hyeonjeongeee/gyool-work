
<template>
  <div class="company-search-container">
    <div class="company-search-content">
      <el-form :model="form" label-width="auto">
        <div class="title">
          회사검색
        </div>
        <div class="input-group">
          <label>사업자 번호</label>
          <el-input v-model="form.businessNum" placeholder="사업자 번호를 입력하세요." :formatter="toOnlyNumber" :parser="parseOnlyNumber" maxlength="10">
            <template #append>
              <el-button :icon="Search" @click="companySearch"/>
            </template>
          </el-input>
        </div>
        <el-button v-if="companyInfo !== 'init' && companyInfo === null" class="bg-gyool-green company-join-btn" @click="companyRegister" >
          회사 등록
        </el-button>
          <el-button v-else-if="companyInfo !== 'init'" class="bg-gyool-green company-join-btn" @click="companyJoin">가입요청</el-button>
      </el-form>
    </div>
  </div>
</template>


  <script setup lang="ts">
  import { Search } from '@element-plus/icons-vue';
  import {reactive, ref} from 'vue'
  import {request} from "@/utils/request.ts";
  import {showMsg} from"@/utils/Elmessage"
  import { useRouter } from 'vue-router'

  //타입지정
  interface formData {
    businessNum: string;
  }

  const form = reactive<formData>({
    businessNum :''
  })

  const companyInfo = ref<'init' | null | any>('init');

  const warn = (message: string): boolean => {
    showMsg('warning', message);
    return false;
  }

  const router = useRouter();

  const companySearch = async ()=>{
    if (form.businessNum.length !== 10) {
      return warn('사업자 번호를 10자리로 정확히 입력해주세요.');
    }

    let url = '/company/search';
    let method = 'post';

    const isValid: boolean = true;

    if(!isValid)return false;

    const result = await request({method: method , url : url, data:form})
    companyInfo.value = result || null;

    if(!result) warn('등록되지 않은 회사입니다. 회사를 등록해주세요.')
  }

  function toOnlyNumber(val :String){
    return val.replace(/\D/g, '').slice(0, 10);
  }

  const parseOnlyNumber = toOnlyNumber;


  const companyJoin = () => {
    console.log('가입요청');
  }

  const companyRegister = () => {
    console.log('회사 등록 페이지로 이동');
    router.push({ name: 'CompanyJoin' })
  };
  </script>

<style scoped>
.company-search-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.company-search-content {
  background-color: #ffffff;
  width: 500px;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 40px 50px 40px 50px;
  border-radius: 1.6rem;
  box-shadow: 0px 3px 8px #808080;
}
.company-join-btn{
  height: 44px;
  width: 100%;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 13px;
}

.title{
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
}

.input-group{
  margin-bottom: 40px;
}

.el-input{
  height: 44px;
}
</style>