import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import envCompatible from 'vite-plugin-env-compatible';
import envVariable from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    envCompatible(),
    envVariable(['BASE_URL']),
  ],
  build: {
    outDir: './build',
  },
  server: {
    port: 8080,
  },
});
