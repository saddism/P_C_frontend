import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import RegisterSuccess from '../views/RegisterSuccess.vue'
import Home from '../views/Home.vue'
import VideoUpload from '../views/VideoUpload.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register-success',
    name: 'RegisterSuccess',
    component: RegisterSuccess
  },
  {
    path: '/upload',
    name: 'VideoUpload',
    component: VideoUpload,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.auth.isAuthenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath, ...to.query }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
