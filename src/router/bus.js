import Vue from "vue";

//掛載在Vue原型下的變數bus(全域，在每個component都可取用)
Vue.prototype.$bus = new Vue();
