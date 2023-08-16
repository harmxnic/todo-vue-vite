<template>
  <div class="mt-10 mx-10 text-white">
    <div class="text-xl font-bold">
      Список задач
    </div>
    <div class="mt-5">
      <div class="flex justify-between md:flex-row flex-col">
        <TabsList
          @tab-changed="tabChanged"
        />
        <div class="border">
          <BaseButton
            @click="toggleModal(true)"
          >
            Добавить задачу
          </BaseButton>
          <Teleport to="body">
            <ModalTodo
              v-if="isModalShown"
              @close-modal="toggleModal(false)"
              @add-todo="addTodoToList"
            />
          </Teleport>
        </div>
      </div>
      <TodoList
        :current-tab="currentTab"
        :todo-array="todoArray"
        @delete-todo="deleteTodo"
        @edit-todo="editTodo"
      />
    </div>
  </div>
</template>

<script setup>
import TodoList from '../todo-list/TodoList.vue';
import TabsList from '../tabs/TabsList.vue';
import BaseButton from '../base/BaseButton.vue';
import ModalTodo from '../modal/ModalTodo.vue';
import { ref } from 'vue';
import { useLocalStorage } from '../../assets/composables/useLocalStorage.js';
import { useFetch } from '../../assets/composables/useFetch.js';
import { useTodo } from '../../assets/composables/useTodo.js';

const { setArrayToLocalStorage } = useLocalStorage();
const { todoArray, addTodo, editTodo, deleteTodo } = useTodo();
const currentTab = ref('all');
const isModalShown = ref(false);

if (!todoArray.value.length) {
  useFetch().then(res => {
    todoArray.value = res.data;
    setArrayToLocalStorage(todoArray.value);
  });
}

const tabChanged = (tabValue) => {
  currentTab.value = tabValue;
};
const toggleModal = (value) => {
  isModalShown.value = value;
};
const addTodoToList = (todo) => {
  addTodo(todo);
  toggleModal(false);
};
</script>