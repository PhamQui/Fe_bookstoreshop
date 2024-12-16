import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/create_payment_url': {
        target: 'https://be-bookstoreshop.onrender.com', // Địa chỉ backend của bạn
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
