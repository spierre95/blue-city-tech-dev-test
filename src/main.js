import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import VueWebsocket from "vue-websocket";
import Reports from "./components/Reports";
import Analytics from "./components/Analytics";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// register socket 
Vue.use(VueWebsocket, "ws://35.183.23.210:8000/b");
Vue.use(Router);

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes: [
      {
        path: '/report',
        name: 'Reports',
        component: Reports,
        alias: [
          '/reports'
        ],
      },
      {
        path: '/',
        name: 'Analytics',
        component: Analytics
      }
    ] 
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
