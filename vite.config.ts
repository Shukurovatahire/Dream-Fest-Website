import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
test:{
  globals:true,
  environment:"jsdom",
  setupFiles:"./src/setupTests.ts"
}, resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
},
});
