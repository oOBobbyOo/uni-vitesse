import type { Router, RouterConfig, RouterLocationRaw } from '@/typings'

import qs from 'qs'
import { isString } from '@/utils'

// @see https://uniapp.dcloud.net.cn/api/router.html
export function useRouter(config: RouterConfig = {}): Router {
  function push(to: RouterLocationRaw) {
    let url = ''
    let replace = false
    let tabBar = false
    let arg = {}
    if (isString(to)) {
      url = to
    } else {
      const {
        query: _query,
        path: _path,
        url: _url,
        replace: _replace,
        tabBar: _tabBar,
        ..._arg
      } = to
      const queryParams = qs.stringify(_query || {})

      url = `${_path || _url}?${queryParams}`
      replace = _replace || false
      tabBar = _tabBar || false
      arg = _arg || {}
    }

    const isLink = url.startsWith('http')
    if (isLink) {
      // #ifdef H5
      window.open(url, replace ? '_self' : '_blank')
      // #endif

      // #ifndef H5
      if (config?.webview) {
        uni.navigateTo({
          url: `${config.webview}?url=${url}`,
          ...arg,
        })
      } else {
        throw new Error('请先配置 webview 路由地址')
      }
      // #endif
      return
    }

    if (tabBar) return uni.switchTab({ ...arg, url })

    if (replace) uni.redirectTo({ ...arg, url })
    else uni.navigateTo({ ...arg, url })
  }

  function replace(to: RouterLocationRaw) {
    const arg = isString(to) ? { path: to } : to

    push({
      ...arg,
      replace: true,
    })
  }

  function back(delta = 1) {
    uni.navigateBack({
      delta,
    })
  }

  return {
    push,
    replace,
    back,
  }
}

export const router = useRouter({
  webview: '/pages/webview',
})
