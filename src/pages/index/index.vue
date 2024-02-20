<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
  layout: 'default',
}
</route>

<script setup lang="ts">
const name = ref('')

function go() {
  uni.navigateTo({
    url: `/pages/hi/index?name=${name.value}`,
  })
}
</script>

<template>
  <TheLogo />
  <TheInput v-model:value="name" placeholder="What's your name?" @keydown.enter="go" />
  <view>
    <button :disabled="!name" m-3 text-sm btn @click="go">Go</button>
  </view>
</template>
