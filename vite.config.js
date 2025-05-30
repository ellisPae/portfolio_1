import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/portfolio_1/",

  build: {
    outDir: "docs",
    emptyOutDir: true,
  },

  plugins: [react(), tailwindcss()],
});
