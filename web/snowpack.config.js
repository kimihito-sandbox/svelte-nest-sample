/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    hostname: "0.0.0.0",
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    "/api": "http://api:3000/",
  },
  alias: {
    /* ... */
  },
};
