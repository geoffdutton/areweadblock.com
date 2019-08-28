import Vue from 'vue'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'
import App from './App.vue'
import bootstrap from './bootstrap'

Vue.use(VueHead)
Vue.use(VueRouter)
Vue.config.productionTip = false

bootstrap(Vue, App)
