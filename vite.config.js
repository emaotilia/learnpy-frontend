import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': "https://pylearn-backend-b4131cb12236.herokuapp.com",
            '/auth': "https://pylearn-backend-b4131cb12236.herokuapp.com",
            '/static': "https://pylearn-backend-b4131cb12236.herokuapp.com"
        }
    }
})