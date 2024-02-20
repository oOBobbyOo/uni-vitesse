import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    const decrement = () => {
      count.value--
    }

    const reset = () => {
      count.value = 0
    }

    return {
      count,
      decrement,
      increment,
      reset,
    }
  },
  {
    persist: true,
  },
)
