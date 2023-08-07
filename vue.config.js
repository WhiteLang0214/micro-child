const path = require('path');
const { name } = require("./package");

module.exports = {
  lintOnSave: false,
  devServer: {
    port: "8088",
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
  },
  configureWebpack: config => {
    return {
      // entry: {
      //   main: "./src/main.js"
      // },
      output: {
        library: `${name} - [name]`,
        libraryTarget: `umd`,
        globalObject: "window",
        // chunkLoadingGlobal: `webpackJsonp_${name}` // 提供一个唯一的名称
        // webpack4 jsonpFunction
      }
    }
  },
}