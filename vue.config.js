// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:8082/',
        ws: true,
        changeOrigin: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    // before: (app) => {}
  }
}
