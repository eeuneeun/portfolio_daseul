import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import withReactRouter from "vite-plugin-next-react-router";
import { fileURLToPath } from "url";
 
// https://vitejs.dev/config/
export default defineConfig({
  css : {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/sass/main.scss" as *;`
      }
    }
  },
  plugins: [react(), withReactRouter({
    pageDir: "src/pages",
    extensions: ["js", "jsx", "ts", "tsx"],
    layout: "_layout",
  }),],
});
