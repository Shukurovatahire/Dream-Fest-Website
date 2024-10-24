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
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Örneğin, sayfa bileşenleri için ayrı chunk'lar oluşturma
          if (id.includes('src/Pages/')) {
            return id.split('src/Pages/')[1].split('/')[0]; // her sayfa için bir chunk
          }
        }
      }
    },
    chunkSizeWarningLimit: 600 // İsterseniz bu değeri artırabilirsiniz
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
