const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcDir = resolve(__dirname, 'src')
const distDir = resolve(__dirname, 'dist')

module.exports = {
    entry: `${srcDir}/index.js`,
    output: {
        path: `${distDir}`,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
