<template>
  <div class="company-join-container">
    <form @submit.prevent="submitForm">
      <div class="company-join-form">
        <div class="form-title">회사생성</div>

        <div class="form-label">사업자 번호</div>
        <input
          class="form-input"
          placeholder="사업자 번호를 입력하세요."
          v-model="businessNumber"
        />

        <div class="form-label">대표자 성명</div>
        <input
          class="form-input"
          placeholder="대표자 성명을 입력하세요."
          v-model="ceoName"
        />

        <div class="form-label">개업일자</div>
        <div class="form-input-wrapper">
          <DatePicker
            ref="picker"
            v-model="openingDate"
            format="yyyy-MM-dd"
            :clearable="true"
            class="form-date-picker"
          />
          <div class="form-select" @click="openDatePicker">
            <div v-if="!openingDateStr" class="select-placeholder">
              개업일자를 선택해주세요.
            </div>
            <div v-else class="select-date">
              {{ openingDateStr }}
            </div>
            <img src="/images/icon/calendar-icon.png" alt="달력아이콘" />
          </div>
        </div>
        <button type="submit" class="form-submit-button">회사 생성</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {computed, nextTick, ref} from 'vue'
import type DatePicker from "@vuepic/vue-datepicker";
import {format} from "date-fns";

const businessNumber = ref('')
const ceoName = ref('')

function submitForm() {
  if (!validationForm()) {
    alert('모든 정보를 입력해주세요.');
    return;
  };

  console.log('사업자번호:', businessNumber.value)
  console.log('대표자 성명:', ceoName.value)
  console.log('개업일자:', openingDate.value)
}

const openingDate = ref(null)

const openingDateStr = computed(() => {
  if (!openingDate.value) return ''
  return format(openingDate.value, 'yyyy-MM-dd')
})
const picker = ref<InstanceType<typeof DatePicker> | null>(null)

function openDatePicker() {
  nextTick(() => {
    const input = (picker.value as any)?.$el?.querySelector('input')
    if (input) {
      input.focus()
      input.click()
    }
  })
}

function validationForm() {
  if (!businessNumber.value) return false;
  if (!ceoName.value) return false;
  if (!openingDate.value) return false;
  return true
}
</script>
<style scoped>
.company-join-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #192038;
}
.company-join-form{
  width: 537px;
  height: 585px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
}
.form-title{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 45px;
}
.form-label{
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}
.form-input{
  height: 44px;
  border-radius: 12px;
  font-size: 14px;
  border: 1px solid #E2E3EC;
  padding: 10px 20px;
  margin-bottom: 45px;
  box-sizing: border-box;
}
.form-input:focus{
  outline: none;
}
.form-input::placeholder{
  color: #adadad;
}
.form-select {
  position: absolute;
  background-color: #ffffff;
  width: 476px;
  height: 44px;
  border-radius: 12px;
  font-size: 14px;
  border: 1px solid #E2E3EC;
  padding: 10px 20px;
  margin-bottom: 45px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}
.select-placeholder {
  color: #adadad;
}
.select-date {
  display: flex;
  justify-content: start;
}
.form-submit-button {
  height: 44px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #889F69;
  border: none;
}
.form-input-wrapper{
  position: relative;
  margin-bottom: 89px;

}
.form-date-picker {
  position: absolute;
  left: 10px;
  width: 450px;
  height: 50px;
  z-index: 0;
}
</style>