import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/home.vue'
const detail = () => import('../views/detail/detail.vue')
const home = () => import('../views/home/home.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/detail',
    component: detail
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
