<route lang="json5">
{
  style: {
    navigationBarTitleText: '案例',
  },
  layout: 'demo',
}
</route>

<script setup lang="ts">
function gotoDetail(path: string) {
  router.push({
    path: `/pages/demo/${path}`,
  })
}
</script>

<template>
  <view>
    <view my-3 font-800>
      基础功能
    </view>
    <view class="mb-2 flex-between bg-white p-3" @click="gotoDetail('base/mp-weixin-share')">
      <text class="flex-1 text-4 text-dark">
        微信分享
      </text>
      <text class="i-carbon-chevron-right" />
    </view>

    <view my-3 font-800>
      组件功能
    </view>
    <view class="mb-2 flex-between bg-white p-3" @click="gotoDetail('comp/ui-swiper-dot')">
      <text class="flex-1 text-4 text-dark">
        SwiperDot
      </text>
      <text class="i-carbon-chevron-right" />
    </view>
  </view>
</template>
