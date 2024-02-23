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

function gotoSubPage(path: string) {
  router.push({
    path: `/pages-sub/${path}`,
  })
}
</script>

<template>
  <view>
    <view my-3 font-800>
      基础功能
    </view>
    <view
      class="mb-2 flex-between rd-1 bg-white p-3 dark:bg-gray-7"
      @click="gotoDetail('base/custom-navbar')"
    >
      <text class="flex-1 text-4 text-dark" dark:text-white>
        自定义导航栏
      </text>
      <text class="i-carbon-chevron-right dark:text-white" />
    </view>

    <view
      class="mb-2 flex-between rd-1 bg-white p-3 dark:bg-gray-7"
      @click="gotoDetail('base/mp-weixin-share')"
    >
      <text class="flex-1 text-4 text-dark dark:text-white">
        微信分享
      </text>
      <text class="i-carbon-chevron-right dark:text-white" />
    </view>

    <view my-3 font-800>
      组件功能
    </view>
    <view
      class="mb-2 flex-between rd-1 bg-white p-3 dark:bg-gray-7"
      @click="gotoDetail('comp/ui-swiper-dot')"
    >
      <text class="flex-1 text-4 text-dark dark:text-white">
        SwiperDot
      </text>
      <text class="i-carbon-chevron-right dark:text-white" />
    </view>

    <view my-3 font-800>
      页面功能
    </view>
    <view
      class="mb-2 flex-between rd-1 bg-white p-3 dark:bg-gray-7"
      @click="gotoSubPage('demo/index')"
    >
      <text class="flex-1 text-4 text-dark dark:text-white">
        分包页面
      </text>
      <text class="i-carbon-chevron-right dark:text-white" />
    </view>
  </view>
</template>
