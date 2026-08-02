import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://vagsbygdlegesenter.no',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
