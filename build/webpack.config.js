const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.pro.config');

module.exports = (env, argv)=>{
    const config = argv.mode === 'development'? devConfig : prodConfig;
    return merge(baseConfig, config)
}