import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), compression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'tailwind-config': path.resolve(__dirname, './tailwind.config.ts'),
    },
  },
  define: { global: {} },
});
