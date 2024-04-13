const webpack = require('webpack');

module.exports = function(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify")
  });
  config.resolve.fallback = fallback;
  return config;
};
