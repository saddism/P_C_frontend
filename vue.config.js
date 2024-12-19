const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  devServer: {
    historyApiFallback: true
  },
  configureWebpack: {
    output: {
      publicPath: '/'
    }
  }
})
