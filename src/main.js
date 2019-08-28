import Vue from 'vue'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueHead)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

window.adsbygoogle = window.adsbygoogle || []
;((times) => {
  while (times--) {
    (window.adsbygoogle = window.adsbygoogle || []).push({}) // eslint-disable-line
  }
})(5)

setInterval(() => {
  [...document.querySelectorAll('ins > iframe')].forEach(iframe => {
    try {
      iframe.contentWindow.location.reload(true)
    } catch (_) {}
  })
}, 45 * 1000)

;(function () { // DON'T EDIT BELOW THIS LINE
  const d = document; const s = d.createElement('script')
  s.src = 'https://areweadblock.disqus.com/embed.js'
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s)
})()
