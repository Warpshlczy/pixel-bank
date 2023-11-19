
const { defineConfig } = require('@vue/cli-service')

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
  },
  devServer: {
    host: "0.0.0.0",
    port: "8080",
    proxy: {
      '/api': {
        target: 'http://localhost:8090',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws'
    }
  },

})