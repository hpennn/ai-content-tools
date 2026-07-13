import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  vite: {
    define: {
      'import.meta.env.ARK_API_KEY': JSON.stringify(process.env.ARK_API_KEY || ''),
      'import.meta.env.ARK_MODEL_ID': JSON.stringify(process.env.ARK_MODEL_ID || ''),
    },
  },
});
