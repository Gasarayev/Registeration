import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/webservice': {
        target: 'http://morooq.az',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})