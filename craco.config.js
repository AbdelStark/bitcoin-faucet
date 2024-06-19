// craco.config.js
const webpack = require("webpack");

module.exports = {
  webpack: {
    alias: {},
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        buffer: require.resolve("buffer/"),
        stream: require.resolve("stream-browserify"),
      };
      return webpackConfig;
    },
  },
};
