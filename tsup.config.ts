import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "index.css",
  ],
  outDir: "./dist/bit",
  // splitting: false,
  sourcemap: true,
  clean: true,
  // dts: true,
  // format: "esm",
  bundle: true,
  loader: {
    ".png": "dataurl",
    ".woff": "dataurl",
    ".woff2": "dataurl",
    ".eot": "dataurl",
    ".ttf": "dataurl",
    ".svg": "dataurl",
    ".otf": "dataurl",
  },
  minify: true,
});
