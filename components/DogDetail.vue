<template>
  <div class="dog-detail-container">
    <div class="dog-detail" v-if="dog">
      <NuxtLink to="/" class="back-button">← Назад к списку собак</NuxtLink>
      
      <div class="dog-detail-content">
        <div class="dog-detail-image">
          <img :src="getImagePath(dog.image)" :alt="dog.name" />
        </div>
        
        <div class="dog-detail-info">
          <h2>{{ dog.name }}</h2>
          <p class="dog-breed">Порода: {{ dog.breed }}</p>
          <p class="dog-age">Пол: {{ genderText }}</p>
          <p class="dog-age">Возраст: {{ getAgeText(dog.age) }}</p>
          <p class="dog-description">{{ dog.description }}</p>
          
          <div class="dog-story">
            <h3>История {{ dog.name }}</h3>
            <p>{{ dog.story }}</p>
            <p class="arrival-date">Поступил{{ dog.gender === 'female' ? 'а' : '' }} в приют в {{ dog.arrivalDate }}</p>
          </div>
          
          <button class="adopt-button" @click="showForm = true">
            Познакомиться
          </button>
        </div>
      </div>
    </div>

    <div class="dog-detail-container" v-else>
      <div class="dog-detail">Собака не найдена</div>
    </div>

    <!-- Модальное окно -->
    <div v-if="showForm" class="dog-detail-modal-overlay" @click="showForm = false">
      <div class="dog-detail-modal-content" @click.stop>
        <h3>Заявка на знакомство с {{ dog?.name }}</h3>
        <form @submit.prevent="handleSubmit">
          <div class="dog-detail-form-group">
            <label>Ваше имя *</label>
            <input
              type="text"
              name="name"
              v-model="formData.name"
              placeholder="Введите ваше имя"
              required
            />
          </div>
          
          <div class="dog-detail-form-group">
            <label>Телефон *</label>
            <input
              type="tel"
              name="phone"
              v-model="formData.phone"
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>
          
          <div class="dog-detail-form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              v-model="formData.email"
              placeholder="your@email.com"
            />
          </div>
          
          <div class="dog-detail-form-group">
            <label>Сообщение</label>
            <textarea
              name="message"
              v-model="formData.message"
              placeholder="Расскажите немного о себе"
              rows="3"
            />
          </div>
          
          <div class="dog-detail-modal-buttons">
            <button type="submit" class="dog-detail-submit-btn">Отправить</button>
            <button type="button" class="dog-detail-cancel-btn" @click="showForm = false">
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dogs } from '~/data/dogs'

const { getImagePath } = useImagePath()
const route = useRoute()

const dog = computed(() => dogs.find(d => d.id === parseInt(route.params.id)))

const showForm = ref(false)
const formData = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const getAgeText = (age) => {
  const ageNum = parseFloat(age)
  const years = Math.floor(ageNum)
  const months = Math.round((ageNum % 1) * 12)
  
  let ageString = ''
  if (years > 0) {
    if (years === 1) ageString += `${years} год`
    else if (years < 5) ageString += `${years} года`
    else ageString += `${years} лет`
  }
  if (months > 0) {
    if (years > 0) ageString += ' '
    if (months === 1) ageString += `${months} месяц`
    else if (months < 5) ageString += `${months} месяца`
    else ageString += `${months} месяцев`
  }
  
  return ageString || 'менее месяца'
}

const genderText = computed(() => dog.value?.gender === 'female' ? 'Девочка' : 'Мальчик')

const handleSubmit = () => {
  console.log('Заявка на знакомство:', {
    dog: dog.value?.name,
    ...formData.value
  })
  alert(`Спасибо, ${formData.value.name}! Мы свяжемся с вами для знакомства с ${dog.value?.name}`)
  showForm.value = false
  formData.value = {
    name: '',
    phone: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
@import './DogDetail.css';
</style>