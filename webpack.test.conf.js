'use strict';

const path = require('path');

module.exports = {
    module: {
        rules: [
            // 统计代码覆盖率，Istanbul 只监测业务代码
            {
                test: /\.js?$/,
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true }
                },
                enforce: 'post',
                exclude: /node_modules|\.spec\.js$/,
                include: path.resolve('src')
            }
        ]
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src')
        },
    },
    devtool: 'inline-source-map',
}