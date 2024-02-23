<script setup lang="ts"></script>

<template>
  <view box-border flex-1 bg-slate-100 p-4 dark:bg-dark-800 color="gray-700 dark:gray-200">
    <slot />
    <view mx-auto mt-4 text-center text-sm opacity-50>
      [Demo Layout]
    </view>
  </view>
</template>
