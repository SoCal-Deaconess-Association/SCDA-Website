import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '192.168.1.3',
  },
  plugins: [react()],
})
