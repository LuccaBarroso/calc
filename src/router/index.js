import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Calculator from "../views/Calculator.vue";
import Investments from "../views/Investments.vue";
import Discount from "../views/Discount.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  },
  {
    path: "/investments",
    name: "Investments",
    component: Investments,
  },
  {
    path: "/discount",
    name: "Discount",
    component: Discount,
  },
  {
    path: "*",
    name: "Home",
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
