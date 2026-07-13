import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwindcss()],
});
