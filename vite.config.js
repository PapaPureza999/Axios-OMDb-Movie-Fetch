// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Axios-OMDb-Movie-Fetch/', // MUST match your repo name
  plugins: [react()],
})
