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
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/register-success',
    name: 'RegisterSuccess',
    component: RegisterSuccess,
    meta: { requiresAuth: false }
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
  // Preserve mock parameter during navigation
  const mockEnabled = from.query.mock === '1'
  const toQuery = { ...to.query }

  if (mockEnabled && !toQuery.mock) {
    toQuery.mock = '1'
  }

  // Check authentication for protected routes
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath, ...toQuery }
      })
      return
    }
  }

  // Always pass through the query parameters
  next({ ...to, query: toQuery })
})

export default router
