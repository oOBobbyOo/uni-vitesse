import { createSSRApp } from 'vue'
import App from './App.vue'

import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './styles/main.scss'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
