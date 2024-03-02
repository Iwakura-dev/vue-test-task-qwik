import type { ITodo } from '@/types/types'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { reactive, ref } from 'vue'

export const useTodo = defineStore('todos', () => {
  const getText = ref<string>('')
  const todos = reactive<ITodo[]>([])
  const handleGetTextFromInput = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement
    getText.value = target.value
  }
  const handleAddTodo = () => {
    if (getText.value !== '') {
      const newTodo = {
        id: uuidv4(),
        title: getText.value,
        editing: false
      }
      todos.push(newTodo)
      localStorage.setItem('todo', JSON.stringify(todos))
      getText.value = ''
    } else {
      alert('Please input your todo!')
    }
  }
  const handleDeleteTodo = (id: string) => {
    const index = todos.findIndex((todo) => todo.id !== id)
    if (index !== -1) {
      todos.splice(index, 1)
    }
    localStorage.setItem('todo', JSON.stringify(todos))
    alert('Todo was been deleted!')
  }
  const handleEditTodo = (id: string) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
      todo.editing = true
    }
  }
  const handleSaveTodo = (id: string, newTitile: string) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
      todo.title = newTitile
      todo.editing = false
      localStorage.setItem('todo', JSON.stringify(todos))
    }
  }
  const loadTodo = () => {
    const storedTodos = localStorage.getItem('todo')
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos)
      if (Array.isArray(parsedTodos)) {
        todos.push(...parsedTodos)
      }
    }
  }
  return {
    getText,
    todos,
    handleGetTextFromInput,
    handleAddTodo,
    handleDeleteTodo,
    loadTodo,
    handleEditTodo,
    handleSaveTodo
  }
})
