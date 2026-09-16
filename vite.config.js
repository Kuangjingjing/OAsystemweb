import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV == "production" ? "/client/" : "/",
  server: {
    port: 6888
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.scss', '.css', '.less'],
    alias: [
    {
      find: '@/',
      replacement: path.resolve('src') + '/',
    },
    {
      find: '@antv/x6',
      replacement: '@antv/x6/dist/x6.js',
    },
    {
      find: '@antv/x6-vue-shape',
      replacement: '@antv/x6-vue-shape/lib',
    },]
  },
  optimizeDeps: {
    exclude: ['@antv/x6-vue-shape'],
  },
  // CSS 预处理器
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    // postcss: {
    //   plugins: [
    //     require('autoprefixer')
    //   ]
    // }
  },
  build: {
    assetsDir: 'static/img',
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]"
      }
    }
  }
})
