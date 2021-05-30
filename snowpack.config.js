// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [
    ["@snowpack/plugin-sass", { compilerOptions: { style: "compressed" } }],
    ["@snowpack/plugin-postcss"],["@snowpack/plugin-webpack"]
  ]
};
