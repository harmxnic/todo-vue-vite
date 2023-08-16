<template>
  <input class="p-2 border rounded-lg h-[42px]"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>