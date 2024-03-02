import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSwitchTheme = defineStore('theme', () => {
  const isDark = ref(localStorage.getItem('theme') === 'dark')
  const theme = computed(() => (isDark.value ? 'dark' : 'light'))

  function switchTheme() {
    isDark.value = !isDark.value
    localStorage.setItem('theme', theme.value)
  }
  return {
    isDark,
    theme,
    switchTheme
  }
})
