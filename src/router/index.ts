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
      redirect: '/about',
      children: [
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/AboutView.vue'),
        },
      ]
    },
  ],
})

export default router
