// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';






import netlify from '@astrojs/netlify';






// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), alpinejs()]
  },

  output: 'server',
  experimental: { svg: true },
  integrations: [alpinejs()],
  adapter: netlify(),
});