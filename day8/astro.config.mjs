// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://astrojs-test-orpin.vercel.app", // dev local
  // Khi deploy thật thì đổi thành https://ten-mien-cua-ban.com
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(), // hoặc netlify(), cloudflare(), ...
  integrations: [mdx(), react(), sitemap()],
});
