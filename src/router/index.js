import { createRouter, createWebHistory } from 'vue-router'


// import page here
import HomePage from '@/Views/HomePage.vue'
import CataloguePage from '@/Views/CataloguePage.vue'
import LoginPage from '@/Views/auth/LoginPage.vue'
import RegisterPage from '@/Views/auth/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/catalogue',
      name: 'Catalogue',
      component: CataloguePage,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'Singup',
      component: RegisterPage,
    },
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
