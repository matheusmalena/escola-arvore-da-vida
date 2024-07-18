const { defineConfig } = require('@vue/cli-service');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '.env') });

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: (tag) => tag.startsWith('app-')
        };
        return options;
      });
  },
  configureWebpack: {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify")
      }
    }
  },
  pluginOptions: {
    env: {
      VUE_APP_INSTAGRAM_ACCESS_TOKEN: process.env.VUE_APP_INSTAGRAM_ACCESS_TOKEN
    }
  }
});
