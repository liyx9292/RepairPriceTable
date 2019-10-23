module.exports = {
  devServer: {
    open: false,
    proxy: {
      '/api': {
        target: 'https://repair.hksjdwx.com/', //对应商家的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  },
  publicPath: './',
  lintOnSave: false
}
