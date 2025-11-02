import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site configuration for Saitharun051.github.io
export default defineConfig({
  plugins: [react()],
  base: '/',
})
