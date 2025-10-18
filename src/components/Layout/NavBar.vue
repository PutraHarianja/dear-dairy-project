<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          <img src="@/assets/dairy.jpg" alt="" srcset="" />
          <span>Dear Dairy</span>
        </div>

        <a
          @click.prevent="showNavbarMenu = !showNavbarMenu"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showNavbarMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNavbarMenu }">
        <div class="navbar-end">
          <RouterLink
            @click="showNavbarMenu = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Notes
          </RouterLink>

          <RouterLink
            @click="showNavbarMenu = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const showNavbarMenu = ref(false);
</script>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
