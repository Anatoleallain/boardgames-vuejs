import { createRouter, createWebHashHistory } from 'vue-router'

import TeamView from './views/TeamView.vue'
import HomeView from './views/HomeView.vue'
import StoreView from './views/StoreView.vue'
import GameView from './views/GameView.vue'
import BasketView from './views/BasketView.vue'

const routes = [
  { 
    path: '/', 
    component: HomeView,
  },
  { 
    path: '/team-creation', 
    component: TeamView,
  },
  { 
    path: '/store-view', 
    component: StoreView
  },
  { 
    path: '/store-view/:id', 
    component: GameView
  },
  { 
    path: '/basket', 
    component: BasketView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'underline font-bold'
})

export default router