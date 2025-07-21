<template>
    <el-button @click="logout">LOGOUT</el-button>
</template>

<script setup lang="ts">
  import {request} from "@/utils/request.ts";
  import {useTokenStore} from "@/stores/Token.ts";
  import {useUserInfo} from "@/stores/UserInfo.ts";
  import {useRouter} from "vue-router";
  import {showMsg} from '@/utils/Elmessage.ts';


  const token = useTokenStore();
  const userInfo = useUserInfo();
  const router= useRouter();

  const logout =async () =>{
    const result = await request({method :'get', url:'/logout'});

    console.log(result);

    if(result){
      token.clearAccessToken();
      userInfo.clearUser();

      showMsg('info','로그아웃 되었습니다.')
      router.push({name :'Login'});
    }
  }
</script>
<style scoped>

</style>