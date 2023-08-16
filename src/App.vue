<template>
  <div class="h-full min-h-screen bg-sky-600">
    <div class="container mx-auto pb-10">
      <AppHeader />
      <AppBody />
    </div>
  </div>
</template>

<script setup>
import AppHeader from './components/main/AppHeader.vue';
import AppBody from './components/main/AppBody.vue';
</script>