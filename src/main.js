// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import VeeValidate from "vee-validate";
import zhTW from "vee-validate/dist/locale/zh_TW";
import VueI18n from "vue-i18n";

import App from "./App";
import router from "./router";
import "bootstrap";
import "./router/bus";
import currency from "./filters/currency";
import timeFilter from "./filters/timeFilter";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueI18n);

axios.defaults.withCredentials = true;

Vue.component("Loading", Loading);
Vue.filter("currency", currency);
Vue.filter("timeFilter", timeFilter);

const i18n = new VueI18n({
  locale: "zhTW"
});
Vue.use(VeeValidate, {
  events: "input|blur", //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
});

new Vue({
  el: "#app",
  i18n,
  router,
  components: {
    App
  },
  template: "<App/>"
});

// 驗證是否登入
router.beforeEach((to, from, next) => {
  // console.log("to", to, "from", from, "next", next);

  // 如果要前往頁面的 meta 有 requiresAuth 的話就進行驗證
  // 沒有就直接切換頁面
  if (to.meta.requiresAuth) {
    // 驗證的 API 路徑
    const api = `${process.env.APIPATH}/api/user/check`;
    // 根據 API 文件，登入方法為 post
    // 因為執行環境是在 router 而不是 APP 內，所以要把 this.$http 改成 axios
    axios.post(api).then(response => {
      // 如果成功登入就放行
      if (response.data.success) {
        next();
      } else {
        // 使用 next 包物件的方式將網址導回首頁
        next({
          path: "/login"
        });
      }
    });
  } else {
    // 如果不需要驗證的頁面就直接放行
    next();
  }
});
