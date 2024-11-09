import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increases the size limit for chunk warnings (in KB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example of creating a separate chunk for large dependencies
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0]; // Split by top-level package
          }
        },
      },
    },
  },
});
