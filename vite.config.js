import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Sử dụng đường dẫn tương đối để deploy lên GitHub Pages không bị lỗi 404
  build: {
    outDir: 'dist',
  }
})
