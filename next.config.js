const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  target: "serverless",
  env: {
    ENABLE_ANALYTICS: process.env.ENABLE_ANALYTICS
  }
});
