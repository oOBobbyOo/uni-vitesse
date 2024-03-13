<script setup lang="ts">
function gotoIndexPage() {
  router.replace({
    path: '/pages/index/index',
    tabBar: true,
  })
}

function gotoSubPage(path: string) {
  router.push({
    path: `/pages-sub/${path}`,
  })
}
</script>

<template>
  <view text="xl gray4" m-5 flex="~ gap3" justify-center>
    <view i-carbon-campsite icon-btn @click="gotoIndexPage" />

    <view i-carbon-sub-volume icon-btn @click="gotoSubPage('demo/index')" />

    <view i-carbon-sun dark:i-carbon-moon icon-btn @click="toggleDark()" />

    <view
      i-carbon-logo-github
      icon-btn
      @click="router.push('https://github.com/oOBobbyOo/uni-vitesse')"
    />
  </view>
</template>
