import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Shop from '@/views/Shop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },

    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
  
  ]
})

export default router
