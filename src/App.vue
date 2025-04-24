<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/core/Header.vue'

  
export default {
  components : {
    Header,

  },
}
</script>

<template>
  <Header></Header>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

<div class="container">
    <Router-view/>
  </div>
</template>

<style scoped>

</style>
