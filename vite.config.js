import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import eslint from "eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), eslint()],
});
