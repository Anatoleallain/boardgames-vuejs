import { createRouter, createWebHashHistory } from 'vue-router'

import TeamView from './views/TeamView.vue'
import HomeView from './views/HomeView.vue'

const routes = [
  { 
    path: '/', 
    component: HomeView,
  },
  { 
    path: '/team-creation', 
    component: TeamView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'underline font-bold'
})

export default router