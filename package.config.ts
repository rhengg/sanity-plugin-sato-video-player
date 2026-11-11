import { defineConfig } from "@sanity/pkg-utils";

export default defineConfig({
  dist: "dist",
  tsconfig: "tsconfig.dist.json",

  // Remove this block to enable strict export validation
});
