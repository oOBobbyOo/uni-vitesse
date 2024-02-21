<route lang="json5">
{
  layout: 'demo',
  style: { navigationBarTitleText: '微信分享' },
}
</route>

<script lang="ts" setup>
import wxShareBefore from '@/assets/share/wx-share-before.jpg'
import wxShareAfter from '@/assets/share/wx-share-after.jpg'

const { onShareAppMessage, onShareTimeline } = useWeixinShare()

onShareAppMessage()

onShareTimeline()
</script>

<template>
  <view class="text-green-500">
    请在微信小程序中体验，或者微信开发者工具
  </view>
  <view class="my-2 text-sm">
    1、默认是不激活”发送给朋友“和”分享到朋友圈“的，如下图
  </view>
  <image :src="wxShareBefore" mode="widthFix" w-full />
  <view class="my-2 text-sm">
    2、增加了 onShareAppMessage 和 onShareTimeline 后，就可以微信分享了，如下图
  </view>
  <image :src="wxShareAfter" mode="widthFix" w-full />
</template>
