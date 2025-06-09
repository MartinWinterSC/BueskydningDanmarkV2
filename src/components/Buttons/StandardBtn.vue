
<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
});

const BtnVariants = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'button--secondary';
    default:
      return 'button--primary';
  }
});
</script>

<template>
  <button
    :class="['baseButton', BtnVariants]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>



<style scoped>
.baseButton {
  font-size: 1rem;
  font-weight: 600;
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: var(--BtnTextColor);

}

.button--primary {
  background-color: var(--BtnColor);
}

.button--primary:hover {
  background-color: var(--BtnColorhover);
}

.button--secondary {
  background-color: #f3f4f6;
  color: #111827;
}

.button--secondary:hover {
  background-color: #e5e7eb;
}

</style>
