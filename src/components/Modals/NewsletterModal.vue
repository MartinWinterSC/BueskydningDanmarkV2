<script setup>
import { reactive, computed } from 'vue'
import StandardBtn from '@/components/Buttons/StandardBtn.vue'

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['update:modelValue', 'submit'])

// Computed: Bind direkte til modelValue
const isVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// Form data
const formData = reactive({
  email: '',
  firstName: '',
  lastName: '',
  club: ''
})

// Luk modal
const closeModal = () => {
  isVisible.value = false
}

// Submit form
const submitForm = () => {
  emit('submit', { ...formData })

  // Rens form
  Object.keys(formData).forEach(key => {
    formData[key] = ''
  })

  closeModal()
  alert('Tak for din tilmelding!')
}

// Gør metoder tilgængelige for parent
defineExpose({
  open: () => (isVisible.value = true),
  close: closeModal
})
</script>

<template>
  <!-- Modal Overlay -->
  <div v-if="isVisible" class="modalOverlay" @click="closeModal">
    <div class="modalContent" @click.stop>
      <h2 class="modalTitle">Tilmeld vores nyhedsbrev</h2>
      
      <form @submit.prevent="submitForm" class="newsletterForm">
        <div class="formData">
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email*"
            class="formInput"
            required
          />
        </div>
        
        <div class="formData">
          <input
            v-model="formData.firstName"
            type="text"
            placeholder="Navn"
            class="formInput"
          />
        </div>
        
        <div class="formData">
          <input
            v-model="formData.lastName"
            type="text"
            placeholder="Efternavn"
            class="formInput"
          />
        </div>
        
        <div class="formData">
          <input
            v-model="formData.club"
            type="text"
            placeholder="Klub/team"
            class="formInput"
          />
        </div>
        
        <StandardBtn variant="primary" type="submit">
          Send din tilmeldelse
        </StandardBtn>
      </form>
    </div>
  </div>
</template>

<style scoped>

.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modalContent {
  background-color: #98161D;
  border-radius: 20px;
  padding: 40px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modalTitle {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 0;
}

.newsletterForm {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.formData {
  width: 100%;
}

.formInput {
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f5f5f5;
  color: #666;
  box-sizing: border-box;
  outline: none;
  transition: background-color 0.3s ease;
}

.formInput:focus {
  background-color: white;
  color: #333;
}

.formInput::placeholder {
  color: #999;
}

/* Responsive design */
@media (max-width: 768px) {
  .modalContent {
    padding: 30px 20px;
    margin: 20px;
  }
  
  .modalTitle {
    font-size: 1.3rem;
  }
  
  .formInput {
    padding: 12px 15px;
  }
}
</style>