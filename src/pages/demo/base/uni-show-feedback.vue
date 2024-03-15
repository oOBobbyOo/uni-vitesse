<route lang="json5">
{
  layout: 'base',
  style: {
    navigationBarTitleText: '交互反馈',
  },
}
</route>

<script setup lang="ts">
const { showToast } = useShowToast({ title: '消息提示', icon: 'loading' })
const { showModal } = useShowModal({ title: '弹窗标题', content: '弹窗内容' })
</script>

<template>
  <view>
    <button m-3 text-sm btn @click="showToast">
      消息
    </button>

    <button m-3 text-sm btn @click="showModal">
      弹窗
    </button>
  </view>
</template>
