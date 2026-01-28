import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  build: {
    target: "es2018",
    cssCodeSplit: true
  }
});
