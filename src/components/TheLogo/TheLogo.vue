<script setup lang="ts">
import logo from '@/static/logo.png'

const jump = () => {
  uni.navigateTo({ url: 'https://github.com/oOBobbyOo/uni-vitesse' })
}
</script>

<template>
  <view>
    <view my-6 flex justify-center>
      <image h-14 w-14 :src="logo" />
      <view
        text="4xl gray4"
        m="x-4 y-auto"
        i-carbon-add
        transform
        transition-all-500
        hover:rotate-135
      />
      <view i-carbon-campsite inline-block text-5xl />
    </view>
    <view my-2>
      <text @click="jump">Uni Vitesse</text>
    </view>
    <view>
      <text text-sm italic op75>Opinionated UniApp Vite Starter Template</text>
    </view>
  </view>
</template>
