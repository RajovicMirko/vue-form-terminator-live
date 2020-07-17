const path = require("path");

module.exports = {
  css: { extract: false },
  configureWebpack: {
    resolve: {
      alias: {
        "@c": path.resolve(__dirname, "src/components"),
        "@r": path.resolve(__dirname, "src/router"),
        "@v": path.resolve(__dirname, "src/views"),
      },
    },
  },
};
