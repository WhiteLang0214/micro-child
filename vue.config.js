const path = require('path');
const { name } = require("./package");

module.exports = {
  lintOnSave: false,
  devServer: {
    port: "8082",
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    },
  },
  configureWebpack: config => {
    return {
      output: {
        library: `${name} - [name]`,
        libraryTarget: `umd`,
        globalObject: "window"
      }
    }
  },
}