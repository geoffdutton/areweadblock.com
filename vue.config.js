
const format = (item) => {
  if (item.lang) {
    return `<meta property="${item.property}" lang="${item.lang}" content="${item.content}" />`
  }
  if (item.url) {
    item.content = `<%= require(${item.content}) %>`
  }
  return `<meta property="${item.property}" content="${item.content}" />`
}

class OpengraphHtmlWebpackPlugin {
  constructor (opts) {
    this.options = opts
  }

  apply (compiler) {
    // Hook into the html-webpack-plugin processing
    if (compiler.hooks) {
      // Webpack 4+ Plugin Systema
      compiler.hooks.compilation.tap('OpengraphHtmlWebpackPlugin', (compilation) => {
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('OpengraphHtmlWebpackPluginOGTags', (htmlPluginData, callback) => {
          const filesToInclude = this.options.map(format).join('\n')
          htmlPluginData.html = htmlPluginData.html.replace('</head>', filesToInclude + '\n</head>')
          callback(null, htmlPluginData)
        })
      })
    } else {
      // Webpack 1-3 Plugin System
      compiler.plugin('compilation', compilation => {
        compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
          const filesToInclude = this.options.map(format).join('\n')
          htmlPluginData.html = htmlPluginData.html.replace('</head>', filesToInclude + '\n</head>')
          if (callback) callback(null, htmlPluginData)
        })
      })
    }
  }
}

const addPlusSignIfPositive = n => n > 0 ? `+${n}` : n

const now = JSON.stringify(((d) => {
  const offset = d.getTimezoneOffset() / 60 * -1
  if (offset === 0) {
    return d.toLocaleString() + ' UTC'
  }
  return d.toLocaleString() + ' ' + addPlusSignIfPositive(d.getTimezoneOffset() / 60 * -1) + ':00'
})(new Date()))

module.exports = {
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      definitions[0]['process.env'].PACKAGE_VERSION = JSON.stringify(require('./package.json').version)
      definitions[0]['process.env'].BUILD_TIME = now
      return definitions
    })
  },
  configureWebpack: {
    mode: 'development',
    plugins: [
      new OpengraphHtmlWebpackPlugin([
        { property: 'og:title', content: 'Are We Ad Block?' },
        { property: 'og:description', content: 'A dummy site with a bunch of ads and other annoying scripts' },
        { property: 'og:site_name', content: 'areweadblock.com' }
        // { property: 'og:image', url: true, content: './src/assets/cover-header.jpg' }
      ])
    ]
  }
}
