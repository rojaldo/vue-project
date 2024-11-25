import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeroesView from '@/views/HeroesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/',
      name: 'root',
      component: HeroesView
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: HeroesView
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../views/CalculatorView.vue')
    },
    {
      path: '/apod',
      name: 'apod',
      component: () => import('../views/ApodView.vue')
    },
    {
      path: '/trivial',
      name: 'trivial',
      component: () => import('../views/TrivialView.vue')
    },
    {
      path: '/countries',
      name: 'countries',
      component: () => import('../views/CountriesView.vue')
    }
  ]
})

export default router
