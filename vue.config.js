const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const isProduction = process.env.NODE_ENV === "production";
// externals
const externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    axios: 'axios',
    vuetify: 'Vuetify',
    'mavon-editor': 'MavonEditor',
}

// CDN外链，会插入到index.html中
const cdn = {
    dev: {
        css: [
            'https://waha-share.oss-cn-beijing.aliyuncs.com/cdn/css/katex.css',
            'https://waha-share.oss-cn-beijing.aliyuncs.com/cdn/css/markdown.css'
        ],
        js: []
    },
    build: {
        css: ['https://waha-share.oss-cn-beijing.aliyuncs.com/cdn/css/katex.css',
            'https://waha-share.oss-cn-beijing.aliyuncs.com/cdn/css/markdown.css'
        ],
        js: [
            'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
            'https://cdn.jsdelivr.net/npm/vue-router@3.1.5/dist/vue-router.min.js',
            'https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
            'https://cdn.jsdelivr.net/npm/vuetify@2.5.8/dist/vuetify.min.js',
            'https://cdn.jsdelivr.net/npm/mavon-editor@2.9.1/dist/mavon-editor.min.js',
        ]
    }
}

module.exports = {
    indexPath: "index.html",
    publicPath: "/front",
    outputDir: "./dist/front",
    assetsDir: "static",
    productionSourceMap: false,
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        disableHostCheck: true,
    },
    configureWebpack: {
        // plugins: [
        //   new CopyWebpackPlugin({
        //     patterns: [
        //       {
        //         from: 'src/assets/css',
        //         to: path.resolve(__dirname, './dist/static/css/markdown'),
        //       },
        //     ]
        //   }),
        // ],
    },
    chainWebpack: config => {

        config.when(isProduction, config => {
            config.set('externals', externals)
        })

        config.plugin('html').tap(args => {
            if (isProduction) {
                args[0].cdn = cdn.build
            } else {
                args[0].cdn = cdn.dev
            }
            return args
        })
    },
}