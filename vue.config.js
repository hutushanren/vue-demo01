const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  devServer: {
    port: 8081, // 启动端口号
    open: true  // 启动后是否打开网页
  }
})
