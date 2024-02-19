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
    selectedColor: '#3b82f6',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
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
})
