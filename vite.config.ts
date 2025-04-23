import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // ✅ Explicitly setting the port
    host: "0.0.0.0", // ✅ Allow Render to expose the network
  },
  envDir: './',
  plugins: [react()],
});
