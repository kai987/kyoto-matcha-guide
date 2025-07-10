import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  assetsInclude: ['**/*.svg', '**/*.webp'],
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173, // 默认端口是随机的，这里强制设置
    }
  }
})
