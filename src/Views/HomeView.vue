<script setup></script>

<template>
  <!-- Section Main Image  -->
  <div class="main_image">
    <img src="../assets/formation.jpg" alt="Formation" />
    <div class="text_bloc">
      <h1>I AM THE HOME PAGE</h1>
      <h2>Accéder à la formation</h2>
      <p>
        Simple, flexible et 100% en ligne, Process Coach s'est votre outils de formation contenant
        tout ce qu'il vous faut pour votre apprentissage.
      </p>
      <button>
        <router-link to="/signup"> {{ action }}</router-link>
      </button>
    </div>
  </div>
</template>
