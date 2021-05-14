import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
