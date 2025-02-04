import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.spec.ts", "src/**/*.spec.js"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
