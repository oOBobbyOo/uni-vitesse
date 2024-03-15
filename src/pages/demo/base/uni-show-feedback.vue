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
</script>

<template>
  <view>
    <button m-3 text-sm btn @click="showToast">
      消息提示
    </button>
  </view>
</template>
