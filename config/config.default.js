'use strict'

const path = require('path')

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_cqz654321'

  config.middleware = []

  config.view = {
    root: path.join(appInfo.baseDir, 'app/assets'),
    mapping: {
      '.js': 'assets'
    }
  }

  config.assets = {
    publicPath: '/public/',
    devServer: {
      debug: false,
      command: 'roadhog dev',
      port: 8000,
      env: {
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://127.0.0.1:8000',
        templatePath: path.join(appInfo.baseDir, 'app/view/template.html'),
        templateViewEngine: 'nunjucks'
      }
    }
  }

  config.security = {
    csrf: false
  }

  return config
}