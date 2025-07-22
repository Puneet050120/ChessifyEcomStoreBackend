// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "clothify-backend",
      script: "./src/server.js",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
