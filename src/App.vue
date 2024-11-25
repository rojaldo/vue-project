<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">
    </div>
  </header>
  <nav
    class="navbar navbar-expand-sm navbar-light bg-light"
  >
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <RouterLink to="/calculator"> Calculator </RouterLink>
          </li>
          <div>
             |
          </div>
          <li class="nav-item">
            <RouterLink to="/heroes"> Heroes </RouterLink>
          </li>
          <div>
             |
          </div>
          <li class="nav-item">
            <RouterLink to="/apod"> Apod </RouterLink>
          </li>
          <div>
             |
          </div>
          <li class="nav-item">
            <RouterLink to="/trivial"> Trivial </RouterLink>
          </li>
          <div>
             |
          </div>
          <li class="nav-item">
            <RouterLink to="/countries"> Countries </RouterLink>
          </li>
        </ul>

      </div>
    </div>
  </nav>

  <RouterView />
</template>
