import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path'


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  build: {
    rollupOption: {
        input: {
            main: resolve(__dirname, 'index.html'),
            prueba: resolve(__dirname, 'prueba.html')
        }
    }
  }
})