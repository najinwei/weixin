/**
 * 跨域地址管理文件  20180625 kyy
 */
module.exports = {
  proxyList: {
        '/jdp10': {
            // 测试环境
            target: 'http://59.110.156.99',  // 接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/jdp10': ''   //需要rewrite重写的,
            }
//      },
//      '/publish': {
//          // 本地环境
//          target: 'http://localhost:8090/publish',  // 接口域名
//          changeOrigin: true,  //是否跨域
//          pathRewrite: {
//              '^/publish': ''   //需要rewrite重写的,
//          }
//      },
//      '/apis': {
//          // 开发环境
//          target: 'http://app-t.mhc.mobile.taikang.com/publish',  // 接口域名
//          changeOrigin: true,  //是否跨域
//          pathRewrite: {
//              '^/apis': ''   //需要rewrite重写的,
//          }
        }
  }
}
