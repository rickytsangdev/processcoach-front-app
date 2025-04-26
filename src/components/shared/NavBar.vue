<script setup>
import { RouterLink } from 'vue-router'; 

</script>

<template>
  <!-- Header section -->
   <header>
      <!-- logo div -->
      <div class="header navbar bg-[#FCFCFD] h-25 items-center border-b border-emerald-300 flex-wrap sm:flex-nowrap w-full overflow-hidden" >
        <div class="flex-1">
          <RouterLink to="/" class="btn btn-ghost text-2xl sm:text-4xl"
            >PROCESS COACH</RouterLink>
        </div>
        <!-- div navigation menu -->
      <div class="flex-none">
        <div class="dropdown sm:hidden">
          <label tabindex="0" class="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <RouterLink to="/catalogue">Nos Formations</RouterLink>
            </li>
            <li>
              <RouterLink to="/signup">S'inscrire</RouterLink>
            </li>
            <li>
              <RouterLink to="/login">
                <button class="btn btn-outline btn-success">Se Connecter</button>
              </RouterLink>
            </li>
          </ul>
        </div>
        <ul
          class="hidden sm:flex gap-5 menu menu-horizontal px-1 h-full w-full items-center text-xl text-[#00A778]"
        >
          <li>
            <RouterLink to="/catalogue">Nos Formations</RouterLink>
          </li>
          <li>
            <RouterLink to="/signup">S'inscrire</RouterLink>
          </li>
          <div>
            <RouterLink to="/login">
              <button class="btn btn-outline btn-success">Se Connecter</button>
            </RouterLink>
          </div>
        </ul>
      </div>
  </div>
</header>

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
