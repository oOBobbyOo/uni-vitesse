<route lang="json5">
{
  layout: 'demo',
  style: {
    navigationBarTitleText: '交互反馈',
  },
}
</route>

<script setup lang="ts">
const { showToast } = useShowToast({ title: '消息提示', icon: 'error' })
const { showModal } = useShowModal({ title: '弹窗标题', content: '弹窗内容' })
const { showLoading, hideLoading } = useLoading()
</script>

<template>
  <view flex-center flex-col>
    <button m-3 text-sm btn @click="showToast">
      消息
    </button>

    <button m-3 text-sm btn @click="showModal">
      弹窗
    </button>

    <button m-3 text-sm btn @click="showLoading">
      显示Loading
    </button>

    <button m-3 text-sm btn @click="hideLoading">
      隐藏Loading
    </button>
  </view>
</template>
