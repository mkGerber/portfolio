import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/portfolio/",
  assetsInclude: ["**/*.MOV"], // Include `.MOV` files in the build
}));
