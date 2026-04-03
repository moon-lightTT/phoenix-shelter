<template>
  <div>
    <Hero />
    <DogCarousel />
    <Donate />
    <Footer />
  </div>
</template>

<script setup>
import Hero from '~/components/Hero.vue'
import DogCarousel from '~/components/DogCarousel.vue'
import Donate from '~/components/Donate.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
@import './index.css';
</style>