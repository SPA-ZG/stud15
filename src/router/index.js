import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/opis',
      name: 'opis',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: NotFoundPage,
    }
  ]
})

export default router
