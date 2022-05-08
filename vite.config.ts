import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import path from "path";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
  },
});
