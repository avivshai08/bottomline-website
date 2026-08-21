import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    hmr: false,
    watch: {
      ignored: (filePath) => {
        const normalized = filePath.replace(/\\/g, "/").toLowerCase();
        if (normalized.includes("/public/")) return false;
        return /\.(png|jpe?g)$/i.test(normalized);
      },
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-dev-runtime",
      "react/jsx-runtime",
      "react-router-dom",
      "lucide-react",
    ],
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
