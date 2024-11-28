import { defineConfig } from 'vite';
import * as path from 'path';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? 'https://boyarkinev.github.io/teasers-lib' : '/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
