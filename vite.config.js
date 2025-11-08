import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "library") {
    // Library build mode
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.js"),
          name: "ChanduUIComponents",
          fileName: (format) => {
            if (format === "es") return "index.esm.js";
            if (format === "cjs") return "index.js";
            return `index.${format}.js`;
          },
          formats: ["es", "cjs"],
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }

  // Development/demo mode
  return {
    plugins: [react()],
  };
});
