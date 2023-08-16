<template>
  <div class="fixed top-0 z-50 w-screen h-screen flex justify-center items-center">
    <div class="absolute w-full h-full bg-gray-400 opacity-70"
      @click="$emit('closeModal')"
    ></div>
    <div class="relative p-3 bg-gray-100 border rounded-xl flex flex-col">
      <div class="font-bold text-2xl">Добавление задачи</div>
      <div class="mt-8 flex justify-between items-center gap-10">
        <label class="w-2/3 flex flex-col gap-1">
          <span>Наименование</span>
          <BaseInput
            v-model="titleValue"
            placeholder="Наименование задачи"
          />
        </label>
        <label class="flex flex-col gap-1">
          <span class="mb-auto">Выполнено</span>
          <BaseCheckbox class="self-center h-[42px]"
            v-model="completedValue"
          />
        </label>
      </div>
      <div class="mt-5">
        <BaseButton class="p-4 bg-sky-600 rounded-2xl text-white"
          @click="addTodo"
        >
          Добавить задачу
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '../base/BaseInput.vue';
import BaseCheckbox from '../base/BaseCheckbox.vue';
import BaseButton from '../base/BaseButton.vue';
import { ref } from 'vue';

const emits = defineEmits(['closeModal', 'addTodo']);

const titleValue = ref('');
const completedValue = ref(false);

const addTodo = () => {
  emits('addTodo', {
    title: titleValue.value,
    completed: completedValue.value
  });
};
</script>