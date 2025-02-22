import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

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
        description: "My Portfolio Website",
        theme_color: "#0a0a0a",
        background_color: "#f8f8f8",
        display: "standalone",
        icons: [
          {
            // src: "/icon-192x192.png",
            src: "/favicon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            // src: "/icon-512x512.png",
            src: "/favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globDirectory: "dist", // Change this to the correct directory
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
