import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Set VITE_BASE_PATH=/your-subdirectory/ when the host does not serve the
  // app from the domain root. It must start and end with a slash.
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
});
