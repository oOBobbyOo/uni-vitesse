<script setup lang="ts"></script>

<template>
  <view text="xl gray4" m-5 flex="~ gap3" justify-center>
    <view i-carbon-campsite icon-btn />

    <view i-carbon-sub-volume icon-btn />

    <view i-carbon-sun dark:i-carbon-moon @click="toggleDark()" />

    <view i-carbon-logo-github />
  </view>
</template>
