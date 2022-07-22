module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 16, // 换算的基数(设计图750的根字体为32)
      selectorBlackList: [".van", ".my-van"], // 要忽略的选择器并保留为px。
      propList: ["*"], //可以从px更改为rem的属性。
      minPixelValue: 2, // 设置要替换的最小像素值。
    },
  },
};

/* 
    版本过高可能不支持
    需要的插件 
    yarn add postcss-pxtorem@5.1.1 -S   
    yarn add lib-flexible -S
*/
