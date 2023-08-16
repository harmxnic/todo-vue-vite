<template>
  <ul class="mt-3 flex flex-col gap-2">
    <TodoListItem
      v-for="(todo, index) in filteredArray"
      :key="todo.id"
      :todo="todo"
      :todo-index="index + 1"
      @delete-todo="id => $emit('deleteTodo', id)"
      @edit-todo="payload => $emit('editTodo', payload)"
    />
    <li class="text-4xl text-center font-semibold mt-5"
      v-if="!filteredArray.length"
    >
      Список задач пуст
    </li>
  </ul>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';
import { computed } from 'vue';

defineEmits(['deleteTodo', 'editTodo']);
const props = defineProps({
  currentTab: {
    type: String,
    default: 'all'
  },
  todoArray: {
    type: Array,
    default: () => []
  }
});

const filteredArray = computed(() => {
  switch (props.currentTab) {
    case 'completed':
      return props.todoArray.filter(el => el.completed);
    case 'todo':
      return props.todoArray.filter(el => !el.completed);
    default:
      return props.todoArray;
  }
});
</script>