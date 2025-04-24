import { createRouter, createWebHistory } from 'vue-router'

// import Component View here
import HomeView from '@/Views/HomeView.vue'
import CatalogueView from '@/Views/CatalogueView.vue'
import LoginView from '@/Views/auth/LoginView.vue'
import SignupView from '@/Views/auth/SignupView.vue'
import DashboardView from '@/Views/user/DashboardView.vue'
import ProfileView from '@/Views/user/ProfileView.vue'
import NotFoundView from '@/Views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/catalogue',
      name: 'Catalogue',
      component: CatalogueView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView,
    },
    {
      path: '/user/dashboard',
      name: 'Dashboard-user',
      component: DashboardView,
    },
    {
      path: '/user/profile',
      name: 'Profile-user',
      component: ProfileView,
    },
    { path: '/:catchAll(.*)', name: 'not-found', component: NotFoundView },
  ],
})

export default router

// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (About.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import('../views/AboutView.vue'),
// },
