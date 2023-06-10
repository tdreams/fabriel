import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules") && id.endsWith(".js")) {
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 5000, // Adjust the chunk size warning limit as per your needs
  },
});
