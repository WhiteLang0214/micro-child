const path = require('path');
const { name } = require("./package");

const base = process.env.VUE_APP_BASE_URL || "/";
module.exports = {
  lintOnSave: false,
  // publicPath: base,
  devServer: {
    port: "8082",
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
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
        globalObject: "window"
      }
    }
  },
}