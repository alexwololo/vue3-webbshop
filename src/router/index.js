import { createRouter, createWebHistory } from "vue-router";
import HeaderView from "../views/HeaderView.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import FooterView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/footer",
    name: "foot",
    component: FooterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
