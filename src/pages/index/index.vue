<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>

<script setup lang="ts">
const name = ref('')

function go() {}
</script>

<template>
  <view p="x4 y10" text="center">
    <TheLogo />
    <TheInput v-model:value="name" placeholder="What's your name?" @keydown.enter="go" />
    <View>
      <button :disabled="!name" m-3 text-sm btn @click="go">Go</button>
    </View>
  </view>
</template>
