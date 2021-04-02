// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: [
    "node_modules",
    ".gitignore",
    "package-lock.json",
    "package.json",
    "snowpack.config.js"
  ],
  plugins: [
    ["@snowpack/plugin-sass", { compilerOptions: { style: "compressed" } }]
  ],
  optimize: {
    bundle: true,
    minify: true,
  },
};
