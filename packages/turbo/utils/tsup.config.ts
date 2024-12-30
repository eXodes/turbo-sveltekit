import { defineConfig } from "tsup";

const config = defineConfig({
  entry: ["src/**/*.ts"],
  format: ["esm", "cjs"],
  dts: true,
});

export default config;
