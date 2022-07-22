const path = require("path");
const SentryWebpackPlugin = require("@sentry/webpack-plugin"); //生产调试。 sourceMap

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 基础路径
const PUBLIC_PATH = process.env.VUE_APP_PUBLIC_PATH || "./";
// 运行环境
const ENV = process.env.NODE_ENV;
// 系统title
const SYSTEM_TITLE = process.env.VUE_APP_SYSTEM_NAME;
// 是否开启sentry
const SENTRY_SWITCH = process.env.VUE_APP_SENTRY_SWITCH === "true";
// 是否上传sourceMap 至sentry
const SENTRY_UPLOAD_SOURCE_MAP =
  process.env.VUE_APP_SENTRY_UPLOAD_SOURCE_MAP === "true";
// sentry token
const SENTRY_AUTH_TOKEN = process.env.VUE_APP_SENTRY_AUTH_TOKEN;
// 项目所在组织
const SENTRY_ORG = process.env.VUE_APP_SENTRY_ORG;
// sentry域名
const SENTRY_HOST = process.env.VUE_APP_SENTRY_HOST;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

module.exports = {
  publicPath: PUBLIC_PATH,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@router", resolve("src/router"))
      .set("@components", resolve("src/components"))
      .end()
      .end()
      .plugin("html")
      .tap((args) => {
        args[0].title = SYSTEM_TITLE;
        return args;
      });
    // 打包分析
    if (process.env.VUE_APP_ANALYZER === "true") {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
    if (SENTRY_SWITCH && SENTRY_UPLOAD_SOURCE_MAP) {
      config.plugin("sentry").use(SentryWebpackPlugin, [
        {
          project: "vue_admin_template",
          authToken: SENTRY_AUTH_TOKEN,
          url: SENTRY_HOST,
          org: SENTRY_ORG,
          include: "./dist",
          ignore: ["node_modules", "vue.config.js"],
          deploy: {
            env: ENV,
          },
        },
      ]);
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: {
      "/": {
        target: "https://fsl.fintify.cn/",
        ws: false,
        changeOrigin: true,
      },
      // "/license-eseal": {
      //   target: "http://test-tb.cngongbao.net:2127/",
      //   ws: false,
      //   changeOrigin: true,
      // },
    },

    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
