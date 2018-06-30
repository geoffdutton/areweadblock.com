const loaderUtils = require('loader-utils')

const format = (item) => {
  if (item.lang) {
    return `<meta property="${item.property}" lang="${item.lang}" content="${item.content}" />`
  }
  return `<meta property="${item.property}" content="${item.content}" />`
}

class OpengraphHtmlWebpackPlugin {
  constructor (opts) {
    this.options = opts
  }

  apply (compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
        console.log(compilation._modules.keys())
        console.log(compiler.blah, m)
        const filesToInclude = this.options.map(format).join('\n')
        htmlPluginData.html = htmlPluginData.html.replace('</head>', filesToInclude + '\n</head>')
        if (callback) callback(null, htmlPluginData)
      })
    })

  }
}

module.exports = {
  configureWebpack: {
    mode: 'development',
    plugins: [
      new OpengraphHtmlWebpackPlugin([
        { property: 'og:title', content: 'Are We Ad Block?' },
        { property: 'og:description', content: 'A dummy site with a bunch of ads and other annoying scripts' },
        { property: 'og:site_name', content: 'areweadblock.com' }
        // { property: 'og:image', content: require('url-loader!./src/assets/cover-header.jpg') }
      ])
    ]
  }
}
