const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        qa: resolve(__dirname, "qa.html"),
        sec: resolve(__dirname, "security.html"),
        bad: resolve(__dirname, "badexample.html"),
      },
    },
  },
};
