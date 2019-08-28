import Vue from 'vue'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueHead)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    // { path: '/', component: App }, // all paths are defined without the hash.
    // { path: '/foo', component: App },
    { path: '*', component: { template: '<div>NOT FOUND <h1>404</h1></div>' }}
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
