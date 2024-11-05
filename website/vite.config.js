import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        app: 'http://localhost:5001/assets/remoteEntry.js', // URL for the `home` micro frontend
        home: 'http://localhost:5002/assets/remoteEntry.js', // URL for the `home` micro frontend
        profile: 'http://localhost:5003/assets/remoteEntry.js', // URL for the `home` micro frontend
      },
      shared: ['react'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
