<template>
  <div class="layout">
    <Navbar />
    <slot />
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
</script>

<style scoped>
@import './Layout.css';
</style>