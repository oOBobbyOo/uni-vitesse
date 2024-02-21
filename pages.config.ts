import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

// @see https://zh.uniapp.dcloud.io/collocation/pages.html
export default defineUniPages({
  // 你也可以定义 pages 字段，它具有最高的优先级。
  pages: [],
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'uni-vitese',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
    backgroundColor: '@bgColor',
    backgroundTextStyle: '@bgTxtStyle',
    backgroundColorTop: '@bgColorTop',
    backgroundColorBottom: '@bgColorBottom',
  },
  tabBar: {
    color: '@tabFontColor',
    selectedColor: '@tabSelectedColor',
    backgroundColor: '@tabBgColor',
    borderStyle: '@tabBorderStyle',
    height: '50px',
    fontSize: '10px',
    iconWidth: '22px',
    spacing: '3px',
    list: [
      {
        // iconPath: 'static/tabbar/home.png',
        // selectedIconPath: 'static/tabbar/homeHL.png',
        iconPath: '@iconPath1',
        selectedIconPath: '@selectedIconPath1',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        // iconPath: 'static/tabbar/demo.png',
        // selectedIconPath: 'static/tabbar/demoHL.png',
        iconPath: '@iconPath2',
        selectedIconPath: '@selectedIconPath2',
        pagePath: 'pages/demo/index',
        text: '案例',
      },
      {
        // iconPath: 'static/tabbar/about.png',
        // selectedIconPath: 'static/tabbar/aboutHL.png',
        iconPath: '@iconPath3',
        selectedIconPath: '@selectedIconPath3',
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
