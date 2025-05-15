import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout  from "@/layout/DefaultLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'Login',
      component : () => import('../views/Login.vue')
    },
    {
      path : '/join',
      name : 'Join',
      component : () => import('../views/Join.vue')
    },
    {
      path: '/main',
      name: 'Home',
      component: DefaultLayout,
      redirect: '/main/about',
      children: [
        {
          path: 'about',
          name: 'About',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'companyCreate',
          name: 'CompanyCreate',
          component: () => import('../views/CompanyCreate.vue'),
        },
        {
          path: 'companySearch',
          name: 'CompanySearch',
          component: () => import('../views/CompanySearch.vue'),
        },
        {
          path: '/companyJoin',
          name: 'CompanyJoin',
          component: () => import('../views/CompanyJoin.vue'),
        }
      ]
    },
  ],
})

export default router
