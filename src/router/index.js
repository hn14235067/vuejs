import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/pages/Login";
import Products from "@/components/pages/Products";
import Coupons from "@/components/pages/Coupons";
import CustomersOrders from "@/components/pages/CustomersOrders";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/admin",
      name: "Dashboard",
      component: Dashboard,
      children: [
        {
          path: "products",
          name: "Products",
          component: Products,
          meta: { requiresAuth: true }
        },
        {
          path: "coupons",
          name: "Coupons",
          component: Coupons,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      children: [
        {
          path: "/customers_orders",
          name: "CustomersOrders",
          component: CustomersOrders
        }
      ]
    }
  ]
});