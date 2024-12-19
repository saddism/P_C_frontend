import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import RegisterSuccess from "../views/RegisterSuccess.vue";
import VerifyEmail from "../views/VerifyEmail.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register-success",
    name: "RegisterSuccess",
    component: RegisterSuccess,
  },
  {
    path: "/verify-email",
    name: "VerifyEmail",
    component: VerifyEmail,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach((to, from) => {
  if (from.query.mock && !to.query.mock) {
    return { path: to.path, query: { ...to.query, mock: '1' } };
  }
});

export default router;
