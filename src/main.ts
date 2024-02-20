import { createSSRApp } from 'vue'
import App from './App.vue'

import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './styles/main.scss'

import store from './stores'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app,
  }
}
