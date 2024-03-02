import HomeView from '@/views/HomeView.vue'
import TasksView from '@/views/TasksView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/tasks',
      component: TasksView
    }
  ]
})

export default router
