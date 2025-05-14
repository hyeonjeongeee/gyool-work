
<template>
  <div class="company-div">
    <div class="company-content">
        <div class="input-div">
          <div class="label">귤워크 시작을 위해 회사를 선택해주세요</div>
        </div>
        <div class="row-space-between">
          <div>
            <img src="@/assets/common/companyCreate_l.png" class="company-icon" />
            <el-button class="bg-gyool-oatmeal create-btn" @click="create" style="width: 100%">회사 생성</el-button>
          </div>
          <div>
            <img src="@/assets/common/companyCreate_r.png" class="company-icon" />
            <el-button class="bg-gyool-green select-btn" @click="select" style="width: 100%">회사 선택</el-button>
          </div>
        </div>
    </div>
  </div>
</template>


  <script setup lang="ts">
  import { reactive } from 'vue'

  import logo from '@/assets/logo/gyool1.png';
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const create = ()=>{
    console.log("회사 생성");
  }
  const select = ()=>{
    console.log("회사 선택");
  }
  </script>

<style scoped>
.company-div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.company-content {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 500px;
  padding: 60px 50px 70px 50px;
  border-radius: 20px;
  box-shadow: 0px 3px 8px #808080;
}

.label {
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
}

.input-div {
  margin-bottom: 20px;
  width: 100%;
}

.row-space-between {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.row-space-between > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.company-icon {
  width: 135px;
  height: 160px;
}

.create-btn {
  color: #000000;
  font-weight: bold;
  height: 44px;
  border-radius: 12px;
}

.select-btn {
  color: #ffffff;
  font-weight: bold;
  height: 44px;
  border-radius: 12px;
}
</style>