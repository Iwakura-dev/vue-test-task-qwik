<script lang="ts" setup>
import { reactive } from "vue"
import SwitchTheme from '../UI/SwitchTheme.vue'
const navsHeader = reactive([
  {
    id: 1,
    title: "Home",
    href: '/'
  },
  {
    id: 2,
    title: "Tasks",
    href: '/tasks'
  }
])
</script>

<template>
  <header class="header">
    <div class="header__info">
      <div class="header__left">
        <h1>Iwakura</h1>
        <div>
          <nav class="nav">
            <ul v-for="navs in navsHeader" :key="navs.id">
              <li>
                <RouterLink :to="navs.href">{{ navs.title }}</RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <SwitchTheme />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 15px;
}

.header__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__left {
  display: flex;
  align-items: center;
}

.nav,
ul,
li {
  display: flex;
  font-size: 18px;
}
</style>