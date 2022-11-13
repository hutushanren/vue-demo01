// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  lintOnSave: false,
  devServer: {
    open: false,
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:8082/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
