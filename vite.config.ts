import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import envCompatible from 'vite-plugin-env-compatible';
import envVariable from 'vite-plugin-environment';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    envCompatible(),
    envVariable(['BASE_URL']),
    VitePWA({
      includeAssets: ['robots.txt'],
      manifest: {
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        name: 'Practice Storybook',
        short_name: 'PSB',
        icons: [
          { src: 'pwa-256x256.png', sizes: '256x256', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        sourcemap: true,
      },
    }),
  ],
  build: {
    outDir: './build',
  },
  server: {
    port: 8080,
  },
});
