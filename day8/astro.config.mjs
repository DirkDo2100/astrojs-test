// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321", // dev local
  // Khi deploy thật thì đổi thành https://ten-mien-cua-ban.com
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), react()],
});
