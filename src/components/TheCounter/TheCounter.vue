<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <view inline-flex m="y-3">
    <button rounded-full p-2 btn @click="counter.decrement()">
      <view i-carbon-subtract />
    </button>
    <view font="mono" w="15" m-auto inline-block>
      {{ counter.count }}
    </view>
    <button rounded-full p-2 btn @click="counter.increment()">
      <view i-carbon-add />
    </button>
  </view>
</template>
