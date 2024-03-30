import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-usecontext-example/',
  envPrefix: 'APP_',

  // Aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@constants': path.resolve(__dirname, './src/utils/constants.js'),
      '@store': path.resolve(__dirname, './src/store'),
    },
  },

  // Dev server
  server: {
    port: 3000,
    strictPort: false,
  },
  // Production server
  preview: {
    port: 8080,
    strictPort: false,
  },

  plugins: [
    react(),

    ViteImageOptimizer({
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
    }),
  ],
});
