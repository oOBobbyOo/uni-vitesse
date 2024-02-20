import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

// @see https://zh.uniapp.dcloud.io/collocation/pages.html
export default defineUniPages({
  // 你也可以定义 pages 字段，它具有最高的优先级。
  pages: [],
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'uni-vitese',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#FFF',
  },
  tabBar: {
    color: '#bfbfbf',
    selectedColor: '#3cc51f',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '22px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/homeHL.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/about.png',
        selectedIconPath: 'static/tabbar/aboutHL.png',
        pagePath: 'pages/about/index',
        text: '关于',
      },
    ],
  },
  // @see https://zh.uniapp.dcloud.io/collocation/pages#easycom
  easycom: {
    autoscan: true,
    custom: {
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
    },
  },
})
