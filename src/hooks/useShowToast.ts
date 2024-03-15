interface ToastProps {
  title: string
  icon?: 'success' | 'loading' | 'error' | 'none' | undefined
  image?: string
  mask?: boolean
  duration?: number
  position?: 'center' | 'top' | 'bottom' | undefined
  success?: () => void
  fail?: () => void
  complete?: () => void
}

export function useShowToast({
  title,
  icon = 'success',
  mask = true,
  position = 'center',
  duration = 1000,
  ...moreOptions
}: ToastProps): {
    showToast: () => void
    hideToast: () => void
  } {
  if (!title)
    hideToast()

  function showToast() {
    uni.showToast({
      title,
      icon,
      mask,
      position,
      duration,
      ...moreOptions,
    })
  }

  function hideToast() {
    uni.hideToast()
  }

  return {
    showToast,
    hideToast,
  }
}
