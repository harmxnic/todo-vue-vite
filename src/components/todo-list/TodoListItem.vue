<template>
  <li class="border flex items-center md:gap-0 gap-2 md:flex-row flex-col md:p-10 p-5">
    <div class="flex items-center flex-1 gap-2 md:w-auto w-full">
      <span>{{ todoIndex }}</span>
      <span class="text-ellipsis whitespace-nowrap overflow-hidden xl:w-[50vw] lg:w-[45vw] md:w-[30vw] w-full"
        v-if="!isEditing"
      >
        {{ todo.title }}
      </span>
      <BaseInput class="text-black"
        v-if="isEditing"
        :model-value="todo.title"
        @update:model-value="value => $emit('editTodo', ['title', todo.id, value])"
        @blur="setEditing"
        ref="input"
      />
      <div class="ml-auto flex items-center">
        <BaseCheckbox
          :model-value="todo.completed"
          @update:model-value="$emit('editTodo', ['completed', todo.id])"
        />
      </div>
    </div>
    <div class="md:ml-2 flex gap-2">
      <BaseButton class="w-auto h-auto border-b"
        :class="[isEditing ? 'pointer-events-none text-gray-300 border-none' : '']"
        @click="setEditing"
      >
        Редактировать
      </BaseButton>
      <BaseButton class="w-auto h-auto border-b"
        @click="$emit('deleteTodo', todo.id)"
      >
        Удалить
      </BaseButton>
    </div>
  </li>
</template>

<script setup>
import BaseCheckbox from '../base/BaseCheckbox.vue';
import BaseButton from '../base/BaseButton.vue';
import BaseInput from '../base/BaseInput.vue';
import { ref, nextTick } from 'vue';

defineProps({
  todo: {
    type: Object,
    default: () => ({})
  },
  todoIndex: {
    type: Number,
    default: 1
  }
});
defineEmits(['deleteTodo', 'editTodo']);

const isEditing = ref(false);
const input = ref(null);

const setEditing = () => {
  isEditing.value = !isEditing.value;
  if (isEditing.value) {
    nextTick(() => input.value?.$el.focus());
  }
};
</script>