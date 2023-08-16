<template>
  <li class="md:w-40 w-full text-center border rounded-tl-xl"
    :class="tab.active ? 'bg-[#279E5E] pointer-events-none' : ''"
  >
    <BaseButton
      @click="$emit('setActiveTab', tab.value);"
    >
      {{ tab.title }}
    </BaseButton>
  </li>
</template>

<script setup>
import BaseButton from '../base/BaseButton.vue';

defineProps({
  tab: {
    type: Object,
    default: () => ({
      value: 'all',
      title: 'Все',
      active: true
    })
  },
});
defineEmits(['setActiveTab']);
</script>