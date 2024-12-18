import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import RegisterSuccess from '../views/RegisterSuccess.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
