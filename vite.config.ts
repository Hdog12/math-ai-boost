import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/math-ai-boost/', // IMPORTANT for GitHub Pages
})
