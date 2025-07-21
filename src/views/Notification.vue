<template>
  <div class="notification">
    <h1>This is an notification page</h1>
    <button @click="tokenTest">request Test</button>
  </div>
</template>

<script setup lang="ts">
import {request} from "@/utils/request.ts";

const tokenTest = async () => {
  const result = await request({method :'get', url:'/test'});

  console.log(result);
}

</script>

<style>

</style>

