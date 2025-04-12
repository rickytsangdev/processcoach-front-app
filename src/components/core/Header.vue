<script>
export default {
  name: 'Header',
}
</script>

<template>
  <!-- Header section -->
  <div class="header_bloc">
    <div class="Title">
      <h1>Process Coach</h1>
    </div>
    <div class="navigation_bloc">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/catalogue">Formation</RouterLink>
      <RouterLink to="/login">Se Connecter </RouterLink>
      <RouterLink to="/signup">Commencer </RouterLink>
    </div>
  </div>


</template>

<style scoped>
.header_bloc {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation_bloc {
  display: flex;
  gap: 10px;
}
</style>
