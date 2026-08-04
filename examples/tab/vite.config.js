import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tabs/test',
  esbuild: {
    tsconfigRaw: fs.readFileSync(new URL('./tsconfig.app.json', import.meta.url), 'utf8'),
  },
});
