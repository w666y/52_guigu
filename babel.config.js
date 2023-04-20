module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  //修改babel配置
  // "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};

