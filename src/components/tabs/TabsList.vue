<template>
  <ul class="flex">
    <TabsListItem
      v-for="tab in tabs"
      :key="tab.value"
      :tab="tab"
      @set-active-tab="setActiveTab"
    />
  </ul>
</template>

<script setup>
import TabsListItem from './TabsListItem.vue';
import { ref } from 'vue';

const emits = defineEmits(['tabChanged']);

const tabs = ref([
  {
    value: 'all',
    title: 'Все',
    active: true
  },
  {
    value: 'completed',
    title: 'Выполненные',
    active: false
  },
  {
    value: 'todo',
    title: 'Предстоящие',
    active: false
  }
]);

const setActiveTab = (value) => {
  tabs.value = tabs.value.map(el => {
    if (el.active) {
      return { ...el, active: false };
    }
    if (el.value === value) {
      return { ...el, active: true };
    }
    return el;
  });
  emits('tabChanged', value);
};
</script>