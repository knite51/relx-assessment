const PROXY_CONFIG = {
  "/api": {
    target: "https://angular-exercise.trunarrative.cloud",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
    onProxyReq: function (proxyReq, req, res) {
      proxyReq.setHeader(
        "x-api-key",
        "PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf"
      );
    },
  },
  // "/api": {
  //   target: "http://localhost:3000",
  //   changeOrigin: true,
  //   pathRewrite: {
  //     "^/api": "", // Remove /api prefix from the proxy path
  //   },
  // },
};

module.exports = PROXY_CONFIG;
