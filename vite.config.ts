import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/math-ai-boost/', // must match repo name for GitHub Pages
})
