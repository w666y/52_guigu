module.exports = {

  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",

  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 关闭Prettier。
    "prettier/prettier": "off",
    "vue/multi-word-component-names": "off",// 没生效
  },
  // "rules": {
  //   "semi": ["error", "never"]
  // },
  // "extends": ["eslint:recommended"],
  // "overrides": [
  //   {
  //     "files": ["*.vue", "*.js"],
  //     "rules": {
  //       "vue/multi-word-component-names": "off",
  //       "no-console": "off",
  //       // 关闭Prettier。
  //       "prettier/prettier": "off",
  //     }
  //   }
  // ]
};


