import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://clawguide.dev',
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
