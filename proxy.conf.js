const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://angular-exercise.trunarrative.cloud",
      changeOrigin: true,

      onProxyReq: (proxyReq, req, res) => {
        console.log("Ok");
        proxyReq.setHeader(
          "X-API-Key",
          "PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf"
        );
      },
    })
  );
};
