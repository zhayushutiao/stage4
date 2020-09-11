// 使用html模板
let HtmlPlugin = require('html-webpack-plugin');
// 每次打包前先清空上一次打包的数据
let {CleanWebpackPlugin} = require('clean-webpack-plugin');
// 独立打包css文件
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
// vue插件
let VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    mode:'development',//环境
    devtool:"cheap-module-eval-source-map",
    resolve:{
        // 后缀名
        extensions:['.js','.css','.less'],
        // 别名
        alias:{
            "@css":"../css"
        }
    },
    /* entry:{
        aaa:'./src/js/index.js',
        bbb:'./src/js/index2.js'
    }, */
    entry:'./src/main.js',
    output:{
        path:__dirname+'/dist2',
        filename:'[hash:7]-tt-[name].js'
    },

    // loaders
    // 配置不同的loader来处理非js类型的文件
    module:{
        rules:[
            // 处理vue文件
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.(c|le)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    // 'vue-style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true //css模块化
                        }
                    },
                    'less-loader'
                ]
            },
            // 处理图片
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:[
                    {
                        // 将图片保存在某个路径
                        // loader:'file-loader',
                        // 将图片转换成base64DataURL格式
                        loader:'url-loader',
                        options:{
                            // 不使用默认的md5hash值，指定名称
                            name:'[name]-[hash:6].[ext]',
                            // 输出路径
                            outputPath:'images/',
                            // 限制图片大小
                            limit:20*1024
                        }
                    }
                ],
                
            },
            // babel处理ES6
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },

    // 插件
    plugins:[
       /*  new HtmlPlugin({
            // 指定生成文件的名称
            filename:'a.html',
            // 指定使用的模板
            template:'./src/testWeb.html',
            // 指定使用哪些chunks(entry中的key)
            chunks:['aaa']
        }),
        new HtmlPlugin({
            filename:'b.html',
            template:'./src/testWeb.html',
            chunks:['bbb'],
            minify:{
                // 删除注释
                removeComments:true,
                // 删除空白和换行
                collapseWhitespace:true,
                // 删除CSS中的空白和换行
                minifyCSS:true
            }
        }), */
        new HtmlPlugin({
            template:'./src/testWeb.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name]-[contenthash:6].css'
        }),
        new VueLoaderPlugin()
    ],
    // 配置webpack-dev-server
    devServer:{
        // 在内存中的路径
        contentBase:__dirname + '/dist',
        host:'localhost',
        port:4001,
        open:true,// 自动打开浏览器
        overlay:{
            errors:true //出错时显示错误在页面
        },
        hot:true, //开启热加载
        proxy:{//请求代理

        }
    }
}