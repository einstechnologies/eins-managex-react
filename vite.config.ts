import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/EINS_ManageX/',   // IMPORTANT
  plugins: [react()],
})
