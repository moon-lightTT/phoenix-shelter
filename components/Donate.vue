<template>
  <div>
    <section class="donate" id="donate">
      <h2>Помочь приюту</h2>
      <div class="donate-buttons">
        <div class="donate-button-wrapper">
          <img src="/images/paw.png" alt="Лапа" class="donate-icon paw-icon" />
          <button class="money" @click="showMoneyModal = true">
            Пожертвовать деньги
          </button>
        </div>
        <div class="donate-button-wrapper">
          <button class="food" @click="showFoodModal = true">
            Отправить корм
          </button>
          <img src="/images/paw.png" alt="Лапа" class="donate-icon feed-icon" />
        </div>
      </div>
    </section>

    <!-- Модальное окно для денежного пожертвования -->
    <div v-if="showMoneyModal" class="modal-overlay" @click="showMoneyModal = false">
      <div class="modal-content" @click.stop>
        <h3>Пожертвование денег</h3>
        <form @submit.prevent="handleMoneySubmit">
          <div class="form-group">
            <label for="amount">Сумма пожертвования (₽):</label>
            <input
              type="number"
              id="amount"
              v-model="amount"
              placeholder="Введите сумму"
              required
              min="50"
            />
          </div>
          
          <div class="form-group">
            <label for="email-money">Email:</label>
            <input
              type="email"
              id="email-money"
              v-model="email"
              placeholder="Ваш email"
              required
            />
          </div>
          
          <div class="modal-buttons">
            <button type="submit" class="submit-btn">Отправить</button>
            <button type="button" class="cancel-btn" @click="showMoneyModal = false">
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Модальное окно для пожертвования корма -->
    <div v-if="showFoodModal" class="modal-overlay" @click="showFoodModal = false">
      <div class="modal-content" @click.stop>
        <h3>Пожертвование корма</h3>
        <form @submit.prevent="handleFoodSubmit">
          <div class="form-group">
            <label>Способ доставки:</label>
            <select v-model="deliveryMethod">
              <option value="courier">Курьером (по Москве)</option>
              <option value="pickup">Самовывоз (из приюта)</option>
              <option value="post">Почтой России</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="email-food">Email:</label>
            <input
              type="email"
              id="email-food"
              v-model="email"
              placeholder="Ваш email"
              required
            />
          </div>
          
          <div class="form-group">
            <p class="info-text">Мы свяжемся с вами для уточнения деталей доставки корма</p>
          </div>
          
          <div class="modal-buttons">
            <button type="submit" class="submit-btn">Отправить</button>
            <button type="button" class="cancel-btn" @click="showFoodModal = false">
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const showMoneyModal = ref(false)
const showFoodModal = ref(false)
const amount = ref('')
const email = ref('')
const deliveryMethod = ref('courier')

const handleMoneySubmit = () => {
  console.log('Денежное пожертвование:', { amount: amount.value, email: email.value })
  alert(`Спасибо за пожертвование ${amount.value} ₽! Ссылка на оплату отправлена на ${email.value}`)
  showMoneyModal.value = false
  amount.value = ''
  email.value = ''
}

const handleFoodSubmit = () => {
  console.log('Пожертвование корма:', { deliveryMethod: deliveryMethod.value, email: email.value })
  alert(`Спасибо за помощь! Мы свяжемся с вами по email: ${email.value} для уточнения деталей доставки`)
  showFoodModal.value = false
  email.value = ''
  deliveryMethod.value = 'courier'
}
</script>

<style scoped>
@import './Donate.css';
</style>