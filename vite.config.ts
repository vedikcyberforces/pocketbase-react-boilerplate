import { defineConfig } from "vite";
// Not using react-swc because it is not working for decorators
// We'll implement it later
// import react from "@vitejs/plugin-react-swc";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
