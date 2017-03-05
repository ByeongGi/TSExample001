/**
 * WebPack Defalut 설정 
 */


var path = require("path");

module.exports = {
  entry: './js/index.ts',
  output: {
    path: __dirname + "build",
    filename: 'bundle.js'
  },
  devServer: {
      inline: true,
      port: 7777,
      contentBase: __dirname + '/build/'
  },
  module: {
    rules: [
      {
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
      },
      {
       enforce: 'pre',
       test: /\.tsx?$/,
       use: "source-map-loader"
      }, 
      {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015', {modules: false}]],
            plugins: [
              'syntax-dynamic-import',
              'transform-async-to-generator',
              'transform-regenerator',
              'transform-runtime'
            ]
          }
        }]
      }


    
    ]
  }, 
  resolve: 
  {
   extensions: [".tsx", ".ts", ".js"]
  },
  devtool: 'inline-source-map',


};