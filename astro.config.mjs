import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    define: {
      'import.meta.env.ARK_API_KEY': JSON.stringify(process.env.ARK_API_KEY || ''),
      'import.meta.env.ARK_MODEL_ID': JSON.stringify(process.env.ARK_MODEL_ID || ''),
    },
  },
});
