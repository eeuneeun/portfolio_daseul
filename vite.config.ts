import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'ES6'  // ES6에 해당
  },
  esbuild: {
    target: 'ES6'
  }
})

// const { defineConfig } = require('vite');
// // 혹은 import * as react from '@vitejs/plugin-react';
// const react = require('@vitejs/plugin-react');

// module.exports = defineConfig({
//   plugins: [react()],
// });
