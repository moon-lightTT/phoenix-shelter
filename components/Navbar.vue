<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img :src="getImagePath('/icons/avatar.svg')" alt="Логотип приюта" class="navbar-icon" />
      <span>Приют Феникс</span>
    </div>
    <div class="navbar-links">
      <button @click="scrollToSection('hero')" class="nav-link">Главная</button>
      <button @click="scrollToSection('dogs')" class="nav-link">Собаки</button>
      <button @click="scrollToSection('donate')" class="nav-link">Помочь</button>
      <button @click="scrollToSection('contacts')" class="nav-link">Контакты</button>
    </div>
  </nav>
</template>

<script setup>
const { getImagePath } = useImagePath()

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@import './Navbar.css';
</style>