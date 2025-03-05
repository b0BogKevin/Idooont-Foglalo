import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usetimeStore = defineStore('ido', () => {
  const ora = ref()
  const nap = ref()

  return { ora, nap }
})
