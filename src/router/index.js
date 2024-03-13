import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Interests from '../views/InterestsandMore.vue'
import School from '../views/SchoolandProjects.vue'
import Work from '../views/WorkVolunteer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
  ]
})

export default router
