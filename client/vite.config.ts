import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 4173,
      proxy: {
        // '/api': {
        //   target: 'https://dummyjson.com',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, '')
        // },
        '^/graphql*': {
          target: process.env.VITE_GRAPHQL_URL,
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => {
          //   // path.replace(/^\.\//, '')
          //   console.log(path);
          //   return path
          // }
        },
      }
    }
  })
}
