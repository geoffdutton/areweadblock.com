
export function spew () {
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

  window.vglnk = { key: 'be7eb6a7f1553b3a1e44b894d11b98b8' }
  ;(function (d, t) {
    const s = d.createElement(t)
    s.type = 'text/javascript'
    s.async = true
    s.src = '//cdn.viglink.com/api/vglnk.js'
    const r = d.getElementsByTagName(t)[0]
    r.parentNode.insertBefore(s, r)
  }(document, 'script'))

  ;(function (s, u, m, o, j, v) {
    j = u.createElement(m)
    v = u.getElementsByTagName(m)[0]
    j.async = 1
    j.src = o
    j.dataset.sumoSiteId = 'aba85bf128606d0ba0435e4c9f67a02f9ec10d38fb56ce14675fe9e66781dbf4'
    v.parentNode.insertBefore(j, v)
  })(window, document, 'script', '//load.sumo.com/')

  ;(function () {
    const configuration = {
      token: '3f19bdb756134e633c532545fb6ea38d',
      capping: {
        limit: 5,
        timeout: 24
      },
      entryScript: {
        type: 'timeout',
        timeout: 3000,
        capping: {
          limit: 5,
          timeout: 24
        }
      },
      exitScript: {
        enabled: true
      },
      popUnder: {
        enabled: true
      }
    }
    const script = document.createElement('script')
    script.async = true
    script.src = '//cdn.shorte.st/link-converter.min.js'
    script.onload = script.onreadystatechange = function () {
      const rs = this.readyState
      if (rs && rs !== 'complete' && rs !== 'loaded') return
      // eslint-disable-next-line no-undef
      shortestMonetization(configuration)
    }
    const entry = document.getElementsByTagName('script')[0]
    entry.parentNode.insertBefore(script, entry)
  })()
  console.log('crap init\'t!')
}
