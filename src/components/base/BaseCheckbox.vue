<template>
  <input class="w-5 h-5 cursor-pointer"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    type="checkbox"
  >
</template>

<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>