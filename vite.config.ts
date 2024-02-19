import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
// @see https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
// @see https://unocss.dev/integrations/vite
import UnoCSS from 'unocss/vite'
// @see https://github.com/jpkleemans/vite-svg-loader
import svgLoader from 'vite-svg-loader'
// @see https://github.com/vbenjs/vite-plugin-svg-icons
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// @see https://github.com/btd/rollup-plugin-visualizer
import { visualizer } from 'rollup-plugin-visualizer'
// @see https://github.com/antfu/vite-plugin-restart
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('>>: command', command)
  // mode: 区分生产环境还是开发环境
  console.log('>>: mode', mode)

  // process.cwd(): 获取当前文件的目录根地址
  // loadEnv(): 返回当前环境env文件中额外定义的变量
  const env = loadEnv(mode, resolve(process.cwd(), 'env'))
  console.log(env)
  console.log(process.env.UNI_PLATFORM) // 得到 mp-weixin, h5 等

  return {
    plugins: [
      Uni(),
      UnoCSS(),
      svgLoader(),
      // 按需自动导入
      AutoImport({
        imports: ['vue', 'uni-app'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/composables', 'src/hooks', 'src/stores'],
        vueTemplate: true,
        resolvers: [],
      }),

      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      // https://github.com/btd/rollup-plugin-visualizer
      mode === 'production' &&
        // 打包分析
        visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
          filename: resolve(process.cwd(), 'node_modules/.cache/.visualizer/stats.html'),
        }),
      ViteRestart({
        // 通过这个插件，在修改vite.config.ts文件则不需要重新运行也生效配置
        restart: ['vite.config.ts'],
      }),
    ],
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
    server: {
      host: '0.0.0.0',
      hmr: true,
      port: 5173, // 默认端口: 5173
      proxy: {
        '/api': {
          target: 'http://localhost:5173',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
