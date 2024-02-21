<route lang="json5">
{
  style: {
    navigationBarTitleText: '案例',
  },
  layout: 'demo',
}
</route>

<script setup lang="ts">
function gotoDetail() {
  router.push({
    path: '/pages/demo/base/mp-weixin-share',
  })
}
</script>

<template>
  <view>
    <view mb-3 font-800>
      基础功能
    </view>
    <view class="mb-2 flex-between bg-white p-3" @click="gotoDetail">
      <text class="flex-1 text-4 text-dark">
        微信分享
      </text>
      <text class="i-carbon-chevron-right" />
    </view>
  </view>
</template>
