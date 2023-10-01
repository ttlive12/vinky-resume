import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: 'always',
      },
    },
  },
});
