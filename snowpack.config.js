// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [
    ['@snowpack/plugin-postcss']
   /*  ["@snowpack/plugin-sass", { compilerOptions: { style: "compressed" } }] */
  ],
  optimize: {
    bundle: true,
    minify: true,
    sourcemap: false,
    treeshake: true,
    manifest: false
  },
  root: "src/",
  buildOptions: { out: "build" }
};

