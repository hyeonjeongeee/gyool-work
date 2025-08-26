<template>
  <div class="notification">
    <Calendar class="calenderDiv"/>

    <CalModal
        v-if="isModalOpen"
    />
  </div>
</template>

<script setup lang="ts">
import {request} from "@/utils/request.ts";
import Calendar from "@/component/Calendar.vue"

const tokenTest = async () => {
  const result = await request({method :'get', url:'/test'});

  console.log(result);
}

</script>

<style>
.notification{
  height: 100%;
}
.calenderDiv{
  height: 100%
}
</style>

