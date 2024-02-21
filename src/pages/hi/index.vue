<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: 'Hi',
  },
  layout: 'default',
}
</route>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'

const name = ref('')

onLoad((option) => {
  name.value = option?.name
})
</script>

<template>
  <view>
    <view i-carbon-pedestrian inline-block animate-shake-x animate-duration-5000 text-4xl />

    <view my-1>
      Hi, {{ name }}!
    </view>

    <view text-sm italic op75>
      <em>Demo of dynamic route</em>
    </view>

    <TheCounter />

    <view>
      <button m-3 text-sm btn @click="router.back">
        Back
      </button>
    </view>
  </view>
</template>
