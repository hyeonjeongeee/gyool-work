import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useTokenStore } from '@/stores/Token'
import { useUserInfo } from '@/stores/UserInfo'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component('DatePicker', DatePicker)


//새로고침시 access 토큰 reload
useTokenStore().loadAccessToken();
useUserInfo().loadUser();

app.mount('#app')
