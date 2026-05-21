import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TransactionCheck from '../views/TransactionCheck.vue'
import Leaderboard from '../views/Leaderboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cek-transaksi',
    name: 'TransactionCheck',
    component: TransactionCheck
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // offset for sticky navbar
      }
    }
    return savedPosition || { top: 0 }
  }
})

export default router
