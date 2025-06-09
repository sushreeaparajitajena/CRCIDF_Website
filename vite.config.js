import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CRCIDF_Website/', 
  plugins: [react()],
});
