// @ts-check
import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

import svelte from "@astrojs/svelte"

import react from "@astrojs/react"

import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    svelte(),
    react(),
  ],
  output: "hybrid",
  adapter: netlify(),
})
