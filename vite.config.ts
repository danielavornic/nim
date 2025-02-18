import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    allowedHosts: ["07d502fa160ccd.lhr.life", "c45860d1e3a345.lhr.life"]
  },
  assetsInclude: ["**/*.woff2", "**/*.woff"]
});
