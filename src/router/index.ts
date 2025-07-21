import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout  from "@/layout/DefaultLayout.vue";
import { useTokenStore } from '@/stores/Token'
import {useUserInfo} from "@/stores/UserInfo.ts";
import {showMsg} from "@/utils/Elmessage.ts"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/login',
      name : 'Login',
      component : () => import('../views/Login.vue'),
      meta: { requiresAuth: false },
    },
    {
      path : '/join',
      name : 'join',
      component : () => import('../views/Join.vue'),
      meta: { requiresAuth: false },
    },
    {
      path : '/findPassword',
      name : 'findPassword',
      component : () => import('../views/FindPassword.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/',
      name: 'home',
      component: DefaultLayout,
      redirect: '/main/notification',
      children: [
        {
          path: '/main/notification',
          name: 'notification',
          component: () => import('../views/Notification.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/main/chat',
          name: 'chat',
          component: () => import('../views/Chat.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/main/setting',
          name: 'setting',
          component: () => import('../views/Setting.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/main/mypage',
          name: 'mypage',
          component: () => import('../views/MyPage.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'companyCreate',
          name: 'companyCreate',
          component: () => import('../views/CompanyCreate.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'companySearch',
          name: 'companySearch',
          component: () => import('../views/CompanySearch.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'companyJoin',
          name: 'companyJoin',
          component: () => import('../views/CompanyJoin.vue'),
          meta: { requiresAuth: true },
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue'),
    }
  ],
})

router.beforeEach(async (to, from, next)=>{
  const token = useTokenStore();
  const userInfo = useUserInfo();
  const isAuthenticated  =await token.isTokenExpired();

  console.log(isAuthenticated+">sdF.dsf,kdsf;ldskmjf");
  //권한이 필요한 페이지를 요청한경우
  if(to.meta.requiresAuth){
      //토큰 만료시간이 유효하면 next
    if(isAuthenticated){
      token.clearAccessToken();
      userInfo.clearUser();
      if(from.path != '/'){
        showMsg('error','로그인 만료. 다시 로그인 해주세요.')
      }
      next("/login")
    }else{
      next();
    }
  }else{
    next();
  }


})
export default router
