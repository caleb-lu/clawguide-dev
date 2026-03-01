import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://clawguide.dev',
  // base: '/clawguide-dev', // 暂时注释掉，使用根路径
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
