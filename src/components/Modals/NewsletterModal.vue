<script setup>
import { reactive, computed, ref } from 'vue'
import StandardBtn from '@/components/Buttons/StandardBtn.vue'

const isSubmitted = ref(false)

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
  isSubmitted.value = true; // Trigger checkmark

  emit('submit', { ...formData });

  // Clear form but delay modal close
  Object.keys(formData).forEach(key => {
    formData[key] = ''
  });

  setTimeout(() => {
    isSubmitted.value = false;
    closeModal();
  }, 2000); // 2 seconds to allow checkmark animation to play
};


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
          <template v-if="!isSubmitted">Tilmeld</template>
          <template v-else>
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </template>
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

/* Checkmark brought to us by the curtosy of Arthur D'huy */
/* https://codepen.io/led8/pen/yLLddyb */
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 4;
  stroke-miterlimit: 10;
  stroke: white;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}
.checkmark {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: green;
  stroke-miterlimit: 10;
  margin: 0 auto;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}
.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}
@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #fff;
  }
}
/* End */

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