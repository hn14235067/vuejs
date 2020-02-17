import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/frontEnd/Login.vue")
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: () => import("../views/backEnd/Dashboard.vue"),
    children: [
      {
        path: "products",
        name: "Products",
        component: () => import("../views/backEnd/Products.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "coupons",
        name: "Coupons",
        component: () => import("../views/backEnd/Coupons.vue"),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/frontEnd/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/frontEnd/About.vue")
  },
  {
    path: "/cus_products",
    name: "CusProducts",
    component: () => import("../views/frontEnd/CusProducts.vue")
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/frontEnd/News.vue")
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/frontEnd/Product.vue")
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/frontEnd/Checkout.vue")
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
