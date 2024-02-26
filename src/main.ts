import { createSSRApp } from 'vue'
import App from './App.vue'

import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './styles/main.scss'

import store from './stores'

import shareMixin from './utils/share'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)

  // 全局分享
  app.mixin(shareMixin)

  return {
    app,
  }
}
