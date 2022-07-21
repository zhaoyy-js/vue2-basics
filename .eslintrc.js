module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint",
  },
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": "off", //意思就是不让eslint校验我定义有没有用了。
  },
};
