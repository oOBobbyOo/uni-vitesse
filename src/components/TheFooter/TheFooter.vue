<script setup lang="ts">
function go() {
  router.replace({
    path: '/pages/index/index',
    tabBar: true,
  })
}
</script>

<template>
  <view text="xl gray4" m-5 flex="~ gap3" justify-center>
    <view i-carbon-campsite icon-btn @click="go" />

    <view i-carbon-sub-volume icon-btn />

    <view i-carbon-sun dark:i-carbon-moon icon-btn @click="toggleDark()" />

    <view
      i-carbon-logo-github
      icon-btn
      @click="router.push('https://github.com/oOBobbyOo/uni-vitesse')"
    />
  </view>
</template>
