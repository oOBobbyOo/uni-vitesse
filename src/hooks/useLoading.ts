interface LoadingPoprs {
  title?: string
  mask?: boolean
  success?: () => void
  fail?: () => void
  complete?: () => void
}

export function useLoading({
  title = '努力加载中...',
  mask = false,
  ...moreOptions
}: LoadingPoprs = {}) {
  function showLoading() {
    uni.showLoading({
      title,
      mask,
      ...moreOptions,
    })
  }

  function hideLoading() {
    uni.hideLoading()
  }

  return {
    showLoading,
    hideLoading,
  }
}
