import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Stakepool-Frontend/",
  plugins: [react()],
  resolve: {
    alias: {
      react: "react/dist/react.esm-bundler.js",
      ziggy: path.resolve("vendor/tightenco/ziggy/dist/react.es.js"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
