import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && screenGraphPlugin()],
  server: {
    host: "::",
    port: 5173,
  },
  publicDir: "./public",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));
