import path from "node:path";
import { defineConfig, defaultExclude } from "vitest/config";
import configuration from "./vite.config";

export default defineConfig({
  ...configuration,
  resolve: {
    alias: {
      ...configuration?.resolve?.alias,
      test: path.resolve(__dirname, "./tests"),
    },
  },
  test: {
    globals: true,
    setupFiles: [path.resolve(__dirname, "./tests/setup.ts")],
    exclude: [...defaultExclude, "**/*.next**",'tests/e2e/**'],
    environmentMatchGlobs: [
      ["**/*.test.tsx", "jsdom"],
      ["**/*.component.test.ts", "jsdom"],
    ],
    include: [
      "tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
    
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: [
        "tests/**",
        "vite.*.ts",
        "**/*.d.ts",
        "**/*.test.*",
        "**/*.config.*",
        "**/snapshot-tests/**",
        "**/coverage/**",
      ],
      all: true,
      thresholds: {
        autoUpdate: true,
        statements: 2.0,
        // 59.79
      },
    },
  },
});
