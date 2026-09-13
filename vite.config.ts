import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          // Keep question banks in separate chunks so they can be cached per subject.
          groups: [
            {
              name: 'questions-thai',
              test: /[\\/]src[\\/]data[\\/]grade\d+\.ts$/,
            },
            ...['english', 'math', 'science', 'social'].map((subject) => ({
              name: `questions-${subject}`,
              test: new RegExp(`[\\\\/]src[\\\\/]data[\\\\/]${subject}[\\\\/]`),
            })),
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
