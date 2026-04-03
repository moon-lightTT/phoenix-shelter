<template>
  <section class="carousel" id="dogs">
    <h2>Наши собаки</h2>
    <div class="carousel-container-wrapper">
      <button class="carousel-button prev" @click="prevSlide">❮</button>
      <div class="carousel-wrapper" ref="wrapperRef">
        <div class="carousel-container">
          <NuxtLink :to="`/dog/${dog.id}`" v-for="(dog, idx) in infiniteDogs" :key="`${dog.id}-${idx}`">
            <div class="dog-card">
              <img :src="getImagePath(dog.image)" :alt="dog.name" />
              <h3>{{ dog.name }}</h3>
              <p>{{ dog.breed }}, {{ dog.age }} {{ getAgeText(dog.age) }}</p>
              <p>{{ dog.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <button class="carousel-button next" @click="nextSlide">❯</button>
    </div>
  </section>
</template>

<script setup>
import { dogs } from '~/data/dogs'

const { getImagePath } = useImagePath()

const wrapperRef = ref(null)
const autoPlayRef = ref(null)

const infiniteDogs = [...dogs, ...dogs, ...dogs]
const cardWidth = 270
const originalStartIndex = dogs.length
const totalDogsCount = dogs.length

const getAgeText = (age) => {
  if (age === 1) return 'год'
  if (age < 5) return 'года'
  return 'лет'
}

const scrollToIndex = (index, behavior = 'smooth') => {
  if (wrapperRef.value) {
    wrapperRef.value.scrollTo({
      left: index * cardWidth,
      behavior
    })
  }
}

const nextSlide = () => {
  if (!wrapperRef.value) return
  
  const currentScroll = wrapperRef.value.scrollLeft
  const currentCardIndex = Math.round(currentScroll / cardWidth)
  const nextIndex = currentCardIndex + 1
  
  scrollToIndex(nextIndex)
  
  if (nextIndex >= totalDogsCount * 2) {
    setTimeout(() => {
      scrollToIndex(originalStartIndex, 'auto')
    }, 500)
  }
}

const prevSlide = () => {
  if (!wrapperRef.value) return
  
  const currentScroll = wrapperRef.value.scrollLeft
  const currentCardIndex = Math.round(currentScroll / cardWidth)
  const prevIndex = currentCardIndex - 1
  
  scrollToIndex(prevIndex)
  
  if (prevIndex < totalDogsCount) {
    setTimeout(() => {
      scrollToIndex(totalDogsCount * 2, 'auto')
    }, 500)
  }
}

onMounted(() => {
  if (wrapperRef.value) {
    const startPosition = originalStartIndex * cardWidth
    wrapperRef.value.scrollLeft = startPosition
  }

  autoPlayRef.value = setInterval(() => {
    nextSlide()
  }, 5000)
})

onUnmounted(() => {
  if (autoPlayRef.value) {
    clearInterval(autoPlayRef.value)
  }
})
</script>

<style scoped>
@import './DogCarousel.css';
</style>