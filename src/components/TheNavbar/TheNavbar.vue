<script setup lang="ts">
import { getIsTabbar } from '@/utils'

defineProps<{ title?: string }>()

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 获取页面栈
const pages = getCurrentPages()

// 是否tabbar导航
const isTabbar = getIsTabbar()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: `${safeAreaInsets?.top}px` }">
    <!-- 多于1个页面，用返回图标 -->
    <navigator v-if="pages.length > 1" open-type="navigateBack" class="left-icon">
      <view class="h-8 w-8 flex items-center justify-center rounded-full bg-gray-500/80">
        <button class="i-carbon-chevron-left h-7 w-7 text-white" />
      </view>
    </navigator>
    <!-- 只有1个页面，如果不是tabbar，用首页图标 -->
    <navigator
      v-else-if="!isTabbar"
      open-type="switchTab"
      url="/pages/index/index"
      class="left-icon"
    >
      <view class="h-8 w-8 flex items-center justify-center rounded-full bg-gray-500/80">
        <button class="i-carbon-home h-6 w-6 text-white" />
      </view>
    </navigator>
    <!-- 如果当前页就是tabbar页，不用去首页，也就是什么图标都不需要 -->
    <view class="title">
      {{ title || '' }}
    </view>
  </view>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 750rpx;
  color: #000;
  background-color: transparent;

  .left-icon {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    font-size: 44rpx;
    color: #000;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    font-size: 32rpx;
    color: transparent;
  }
}
</style>
