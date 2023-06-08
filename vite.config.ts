import legacy from "@vitejs/plugin-legacy";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  plugins: [
    react(),
    legacy(),
    VitePWA({
      // Configuration options for the plugin
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "./public/index.html",
      },
    },
  },
});
