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

;(adsbygoogle = window.adsbygoogle || []).push({}) // eslint-disable-line
;(adsbygoogle = window.adsbygoogle || []).push({}) // eslint-disable-line
;(adsbygoogle = window.adsbygoogle || []).push({}) // eslint-disable-line
;(adsbygoogle = window.adsbygoogle || []).push({}) // eslint-disable-line
;(adsbygoogle = window.adsbygoogle || []).push({}) // eslint-disable-line
setInterval(() => {
  [...document.querySelectorAll('ins > iframe')].forEach(iframe => {
    try {
      iframe.contentWindow.location.reload(true)
    } catch (_) {}
  })
}, 45 * 1000)

;(function () { // DON'T EDIT BELOW THIS LINE
  const d = document, s = d.createElement('script')
  s.src = 'https://areweadblock.disqus.com/embed.js'
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s)
})()
