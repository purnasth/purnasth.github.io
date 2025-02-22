import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Enable PWA in development
      },
      manifest: {
        name: "Purna's Website",
        short_name: "Purna",
        description: "Purna Shrestha is a UI/UX Designer & Web Developer helping brands build globally through design and code.",
        theme_color: "#0a0a0a",
        background_color: "#f8f8f8",
        display: "standalone",
        icons: [
          {
            src: "/favicon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globDirectory: "dist", // Ensure this is the correct directory
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Increase the limit to 10 MiB
      },
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "log-dist-files",
          writeBundle() {
            const distPath = path.resolve(__dirname, "dist");
            const files = fs.readdirSync(distPath);
            console.log("Files in dist directory:", files);
          },
        },
      ],
    },
  },
});