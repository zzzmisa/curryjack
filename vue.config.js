module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: process.env.VUE_APP_TEMPLATE || 'public/index.html'
    }
  },
  publicPath: process.env.VUE_APP_PUBLICKPATH || '',
  pluginOptions: {
    i18n: {
      locale: 'ja',
      fallbackLocale: 'ja',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
