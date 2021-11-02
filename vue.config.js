module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            //配置别名 这里配置了别名
            alias: {
                //   '@':'src' 默认配置的别名
                server: '@/server',
                // assets: '@/assets',
                utils: '@/utils',
                components: '@/components',
                teaComponents: '@/teaComponents',
                router: '@/router',
                tViews: '@/tViews',
                comViews: '@/comViews',
                // 'img':'@/assets/img'
            },
        },
    },
    devServer: {
    host: "localhost",
    port: 8888,
    proxy: {
      "/": {
        target: "http://datastruct.free.idcfengye.com", // 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          "^/": "/api/", // 在请求的时候 凡是/开头的地址都可以跨域
        },
      },
    },
  },
}
