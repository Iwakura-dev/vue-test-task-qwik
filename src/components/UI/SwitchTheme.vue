<script lang="ts" setup>
import { useSwitchTheme } from "@/store/switchStoreTheme"
import { computed, watch } from 'vue'

const themeStore = useSwitchTheme()

const theme = computed(() => themeStore.theme)
const switchTheme = themeStore.switchTheme


watch(theme, (newTheme) => {
  const root = document.documentElement
  if (newTheme === 'dark') {
    root.classList.add('dark-mode')
  } else {
    root.classList.remove('dark-mode')
  }
}, { immediate: true })
</script>

<template>
  <button @click="switchTheme">
    {{ theme }}
  </button>
</template>
