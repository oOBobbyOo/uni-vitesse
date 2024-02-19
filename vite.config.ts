import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
// @see https://unocss.dev/integrations/vite
import UnoCSS from 'unocss/vite'
// @see https://github.com/jpkleemans/vite-svg-loader
import svgLoader from 'vite-svg-loader'
// @see https://github.com/vbenjs/vite-plugin-svg-icons
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Uni(),
    UnoCSS(),
    svgLoader(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
})
