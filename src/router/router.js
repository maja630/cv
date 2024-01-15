import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: () => import("../views/Welcome.vue"),
  },
  { path: "/home", name: "home", component: () => import("../views/Home.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
