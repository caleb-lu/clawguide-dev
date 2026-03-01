import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://clawguide.dev',
  base: '/clawguide-dev', // GitHub Pages 子路径
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
