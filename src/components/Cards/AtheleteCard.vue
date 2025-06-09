<script setup>
const props = defineProps({
  athlete: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['cardClicked']);

function handleCardClick() {
  emit('cardClicked', props.athlete);
}
</script>

<template>
  <div class="athleteCard" @click="handleCardClick">
    <div class="athleteImage">
      <img :src="athlete.image" :alt="athlete.name" />
    </div>
    <h3 class="athleteName">{{ athlete.name }}</h3>
    <p class="athleteCategory">{{ athlete.category }}</p>
    <p class="athleteClub">{{ athlete.club }}</p>
  </div>
</template>


<style scoped>

.athleteCard {
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--card-bg, #fff);
  border: 1px solid #e5e5e5;
  width: 100%;
  max-width: 200px;
}

.athleteCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.athleteImage {
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #dc2626;
}

.athleteImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.athleteName {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #1a1a1a;
}

.athleteCategory {
  font-size: 0.9rem;
  color: #666;
  margin: 0.25rem 0;
}

.athleteClub {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

/* Media queries */
@media (max-width: 768px) {
  .athleteCard {
    padding: 1rem;
    max-width: 240px;
  }

  .athleteImage {
    width: 120px;
    height: 120px;
  }

  .athleteName {
    font-size: 1.1rem;
  }
}
</style>