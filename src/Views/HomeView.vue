<script setup>
import { RouterLink } from 'vue-router'
import welcomePage from '../assets/images/welcomePage.png'
</script>

<template>
  <!-- Start of hero section with main image -->
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse gap-20">
      <img
        :src="welcomePage"
        alt="teleworking with students"
        class="max-w-[500px] rounded-lg shadow-2xl"
      />
      <div class="flex justify-center flex-col">
        <h1 class="text-5xl font-bold text-center">Accéder à la plateforme Process Training !</h1>
        <p class="py-6">
          Simple, flexible et 100% en ligne, Process Coach a développé Process Training ! <br />
          C'est votre outils de formation contenant tout ce qu'il vous faut pour votre
          apprentissage.
        </p>

        <RouterLink to="/login" class="btn btn-primary responsive_btn text-2xl">
          Commencer ma formation
        </RouterLink>
      </div>
    </div>
  </div>
  <!--End of hero section -->
</template>

<style scoped>
@media (max-width: 640px) {
  .responsivebtn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
}
</style>
