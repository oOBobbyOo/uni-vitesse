<route lang="json5" type="page">
{
  layout: 'demo',
  style: { navigationBarTitleText: '分包页面' },
}
</route>

<script setup lang="ts"></script>

<template>
  <view text="center">
    <view class="py-2 text-green-500">
      分包页面 demo
    </view>
    <view text-sm italic op75>
      Sub Page Content
    </view>
  </view>
</template>
