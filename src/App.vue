<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Hello Process Coach</h1>


  <div class="navigation">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/catalogue">Formation</RouterLink>
    <RouterLink to="/login">Se Connecter </RouterLink>
    <RouterLink to="/signup">Commencer </RouterLink>
  </div>

  <div class="container">
    <Router-view></Router-view>
  </div>
</template>



<style scoped>
.navigation{
 display: flex;
 gap: 10px;
}

</style>