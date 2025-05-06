import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import setupProxy from './proxy.js';

export default defineConfig({
  output: 'server',
  integrations: [react()],
  server: {
    middleware: [setupProxy],
  },
});
