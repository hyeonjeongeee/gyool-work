
<template>
  <div class="company-search-container">
    <div class="company-search-content">
      <el-form :model="form" label-width="auto">
        <div class="title">
          회사검색
        </div>
        <div class="input-group">
          <label>사업자 번호</label>
          <el-input v-model="companyNumber" placeholder="사업자 번호를 입력하세요." :formatter="toOnlyNumber" :parser="parseOnlyNumber ">
            <template #append>
              <el-button :icon="Search" @click="companySearch"/>
            </template>
          </el-input>
        </div>
        
          <el-button class="bg-gyool-green company-join-btn" @click="companyJoin">가입요청</el-button>
      </el-form>
    </div>
  </div>
</template>


  <script setup lang="ts">
  import { Search } from '@element-plus/icons-vue';
  import { ref } from 'vue';

  const companyNumber = ref('');

  const companySearch = ()=>{
    console.log('사업자 등록번호 : ',companyNumber.value);

    const isValid: boolean = true;

    if(!isValid)return false;

    //api호출
    
  }

  function toOnlyNumber(val :String){
    return val.replace(/\D/g, '');
  }

  const parseOnlyNumber = toOnlyNumber;
  
  
  const companyJoin = () => {
    console.log('가입요청');
  }
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