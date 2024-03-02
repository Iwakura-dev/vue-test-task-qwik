<script lang="ts" setup>
import { useTodo } from "@/store/todoStore"
import type { ITodo } from "@/types/types"

const props = defineProps<{
  todo: ITodo,
  idx: Number
}>()
const { handleDeleteTodo, handleSaveTodo, handleEditTodo, } = useTodo()
</script>


<template>
  <div class="todo__info">
    <div class="todo__info">
      <span>id: {{ props.todo.id }}</span>
    </div>
    <div class="todo__title">
      <h3>{{ props.todo.title }}</h3>
    </div>
    <div class="todo__groupButton">
      <div v-if="todo.editing">
        <textarea v-model="props.todo.title"></textarea>
        <button @click="handleSaveTodo(todo.id, todo.title)">Save</button>
      </div>
      <div v-else>
        <button @click="handleEditTodo(todo.id)">Edit</button>
      </div>
      <div>
        <button type="button" @click="handleDeleteTodo(String(idx))">Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo__title>h3 {
  font-size: 32px;
}

.todo__groupButton {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

textarea {
  resize: none;
}
</style>