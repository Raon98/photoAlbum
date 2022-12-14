const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],
  lintOnSave: false,

  devServer: { //① api 요청이 있을때 어디에서 처리할지를 설정
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  //② 배포 파일의 위치를 지정
  outputDir: '../backend/public',

  pluginOptions: {
    vuetify: {},
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  }
})
