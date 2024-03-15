interface ModalProps {
  title?: string
  content?: string
  showCancel?: boolean
  cancelText?: string
  cancelColor?: string
  confirmText?: string
  confirmColor?: string
  editable?: boolean
  placeholderText?: string
  success?: () => void
  fail?: () => void
  complete?: () => void
}

export function useShowModal({
  title,
  content,
  showCancel = true,
  cancelText = '取消',
  cancelColor = '#000000',
  confirmText = '确定',
  ...moreOptions
}: ModalProps = {}): {
    showModal: () => void
  } {
  function showModal() {
    if (!content)
      return

    uni.showModal({
      title,
      content,
      showCancel,
      cancelText,
      cancelColor,
      confirmText,
      ...moreOptions,
    })
  }

  return {
    showModal,
  }
}
