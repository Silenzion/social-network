import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import path from "path";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  server: {
    open: true,
  },
  test: {
    include: ["test/**/*.test.ts"],
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"],
    },
  },
});
