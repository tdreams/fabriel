import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    chunkSizeWarningLimit: 5000, // Adjust the chunk size warning limit as per your needs
  },
});
