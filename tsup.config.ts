import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
});
