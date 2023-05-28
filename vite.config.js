import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /(.*?)\.(png|jpe?g|svg|gif|webp)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
            },
          },
        ],
      },
    }
    )
  ],
})
