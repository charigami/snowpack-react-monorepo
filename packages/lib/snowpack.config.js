/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: "@org/snowpack-config",
  devOptions: {
    hmr: false,
  },
  buildOptions: {
    out: "../../build/app"
  }
};
