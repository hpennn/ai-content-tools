import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwindcss()],
});
