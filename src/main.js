import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"; 
import {routes} from "./routes"


Vue.use(VueRouter);

const router=new VueRouter({
  routes, //router.js dosyasını burada tanımladık
  mode:'history', //hash: default history: direk diyez olmadan yönlendşrme yapabiliriz
});

new Vue({
  el: '#app',
  router, //burada kullandık
  render: h => h(App)
})
