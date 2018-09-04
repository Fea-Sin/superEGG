'use strict'

const path = require('path')

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.set('Content-Type', 'text/html')
    await this.ctx.render('index.js', {}, {
      templatePath: path.join(this.app.config.baseDir, 'app/view/template.html'),
      templateViewEngine: 'nunjucks'
    })
  }
}

module.exports = HomeController