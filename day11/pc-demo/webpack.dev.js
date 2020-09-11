// 开发环境
let {merge} = require('webpack-merge')
let base = require('./webpack.base')


module.exports = merge(base,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // 在内存中的路径
        contentBase: __dirname + '/dist',
        host: 'localhost',
        port: 4001,
        open: false, // 自动打开浏览器
        overlay: {
            errors: true //出错时显示错误在页面
        },
        hot: true, //开启热加载
        proxy: {},//请求代理
        before(app){
            let data = require('./goods.json');
            app.get('/getdata',(req,res)=>{
                res.send(data)
            })
        }        
    }
})