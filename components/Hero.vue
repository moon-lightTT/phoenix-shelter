<template>
  <section class="hero" id="hero">
    <div class="hero-text">
      <h1>Он ждет тебя!</h1>
      <p>Мы распахнули свои двери, чтобы принять каждого,
        <br /> кто нуждается в тепле.
        Теперь пришло время и вам <br />
        распахнуть 
        двери своего сердца и дома для того, 
        <br />
        кто станет вашим самым верным и любящим другом.</p>
    </div>
    <div class="hero-form">
      <h3>Связаться с нами</h3>
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          v-model="formData.name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          v-model="formData.email"
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          rows="4"
          v-model="formData.message"
          required
        ></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    alert('Пожалуйста, заполните все поля')
    return
  }
  
  console.log('Сообщение отправлено:', formData.value)
  alert(`Спасибо, ${formData.value.name}! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.`)
  
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
@import './Hero.css';
</style>