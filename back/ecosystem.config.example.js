module.exports = {
  apps: [
    {
      name: "CNMSS-Gestion",
      script: "./dist/server.js",
      env: {
        NODE_ENV: "production",
        CNMSS_PORT: 9999,
      },
      env_production: {},
    },
  ],
};
