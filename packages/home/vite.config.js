import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import dns from 'dns';
import react from '@vitejs/plugin-react';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './MFE': './src/App.jsx', // Expose the main component
      },
      remotes: {
        shared: 'http://localhost:5000/assets/shared.js',
      },
      shared: ['react'],
    }),
  ],
  preview: {
    host: 'localhost',
    port: 5002,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
