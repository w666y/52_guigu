const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //解决webpack的错误信息，引用了一个缺失的模块process
  chainWebpack: config => {
    config.resolve.fallback = {
      "process": require.resolve("process/browser")
    }
  }
});
