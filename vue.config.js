const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8080,//它是用来修改你打开后的端口号的
    open: true,//值为 true的话，项目启动时自动打开到浏览器里边， false不会打开
    historyApiFallback: true,
    allowedHosts: "all",
    proxy: {
      '/api': {
        target: 'http://192.168.247.159:8080',
        ws: false,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  },

})
