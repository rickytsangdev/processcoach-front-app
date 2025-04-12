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
<div class="container">
    <Router-view/>
  </div>
</template>

<style scoped>

</style>
