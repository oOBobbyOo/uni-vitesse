<template>
  <view p="x-4 y-10" font-sans text="center" color="gray-700 dark:gray-200">
    <slot />
    <TheFooter />
    <view mx-auto mt-4 text-center text-sm opacity-50>
      [Default Layout]
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
