<script lang="ts" setup>
import Header from "@/components/Header/Header.vue"
import RenderTodo from "@/components/RenderTodo/RenderTodo.vue"
import { useTodo } from "@/store/todoStore"
import { onMounted } from "vue"

const { getText, todos, handleGetTextFromInput, handleAddTodo, loadTodo } = useTodo()
onMounted(() => {
  loadTodo()
})
</script>

<template>
  <div>
    <Header />
    <div class="todo">
      <div class="todo__block">
        <h1>Todo</h1>
        <div class="todo__input">
          <input v-model="getText" @input="event => handleGetTextFromInput(event)" type="text"
            @keyup.enter="handleAddTodo" placeholder="Input your text for todo..." />
        </div>
      </div>
      <div v-for="(todo, idx) in todos" :key="idx" class="todo__wrapper">
        <RenderTodo :todo="todo" :idx="idx" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
}

.todo__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 11px 2px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  padding: 20px 30px;
  border-radius: 30px;
}

.todo__block>h1 {
  font-weight: bold;
}

.todo__input>input {
  background-color: transparent;
  border: none;
  box-shadow: 0px 4px 11px 2px rgba(0, 0, 0, 0.2);
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 18px;
  outline: none;
}

.todo__wrapper {
  display: flex;
  box-shadow: 0px 4px 11px 2px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 10px 12px;
  text-align: center;
  margin: 10px 0;
}
</style>