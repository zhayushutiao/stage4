// 使用html模板
let HtmlPlugin = require('html-webpack-plugin');
// 每次打包前先清空上一次打包的数据
let {CleanWebpackPlugin} = require('clean-webpack-plugin');
// 独立打包css文件
let MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode:'development',//环境
    // 入口文件
    // 从哪个文件开始查找相关的依赖
    // entry:"./src/js/index.js", // 单一入口
    // 多入口
    // entry:[
    //     './src/js/index.js',
    //     './src/js/index2.js'
    // ]
    entry:{
        aaa:['./src/js/index.js','./src/js/index2.js'],
        bbb:'./src/js/index2.js'
    },

    // 出口，输出路径
    // 指定打包生成文件的保存位置
    output:{
        // __dirname表示的是当前项目的路径
        path:__dirname+'/dist2',
        filename:'[hash:7]-tt-[name].js'
    },

    // loaders
    // 配置不同的loader来处理非js类型的文件
    module:{
        rules:[
            // 处理css
            // 使用的加载器的加载顺序：从后向前，从下向上
            // 先使用css-loader让webpack认识css文件，然后再分析打包，再去使用style-loader将样式内联到模板中
            /* {
                test:/\.css$/,
                // 从后向前
                use:['style-loader','css-loader']
            } */
            {
                test:/\.(c|le)ss$/,//以.css结尾的文件
                use:[
                    /* {
                        loader:'style-loader',
                        options:{
                            injectType:'singletonStyleTag'
                        }
                    }, */
                    // 将css独立打包成一个css文件，此时就不需要将样式内联到HTML中，也就不需要style-loader了
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },

    // 插件
    plugins:[
        new HtmlPlugin({
            template:'./src/testWeb.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name]-[contenthash:6].css'
        })
    ]
}