<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/shared/NavBar.vue'
</script>

<template>
  <NavBar />
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <button class="btn">Hello daisyui</button>

  <div class="container">
    <Router-view />
  </div>
</template>

<style scoped></style>
