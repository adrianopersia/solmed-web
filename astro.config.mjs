// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Update with final domain
  site: 'https://solmed.com.ar',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap(),
  ],

  adapter: cloudflare(),
});