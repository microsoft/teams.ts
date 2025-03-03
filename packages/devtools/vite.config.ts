import { defineConfig } from 'vite';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/devtools',
  build: {
    outDir: '../dev/dist/devtools-web',
    rollupOptions: {
      plugins: [nodeResolve()],
    },
  },
});
