<script setup>
import StandardBtn from '../Buttons/StandardBtn.vue';

const props = defineProps({
  image: String,
  title: String,
  description: String,
  date: String,
  time: String,
  location: String,
  buttonText: {
    type: String,
    default: 'Læs mere'
  }
})
</script>

<template>
  <div class="eventCard">
    <div class="eventImage">
      <img :src="image" alt="Event image" />
    </div>

    <div class="eventContent">
      <h2 class="eventTitle">{{ title }}</h2>
      <p class="eventDescription">{{ description }}</p>

      <div class="eventInfo">
        <div>
          <strong>Dato</strong><br />
          {{ date }}
        </div>
        <div>
          <strong>Tid</strong><br />
          {{ time }}
        </div>
        <div>
          <strong>Lokation</strong><br />
          {{ location }}
        </div>
      </div>
    </div>

      <StandardBtn variant="primary" @click="$emit('click')">Læs mere</StandardBtn>
  </div>
</template>

<style scoped> 

.eventCard {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 1rem;
  margin: 1rem auto;
  gap: 1rem;
  max-width: 700px;
  width: 100%;
}

.eventImage img {
  width: 160px;
  height: 160px;
  object-fit: cover;
}

.eventContent {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.eventTitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.eventDescription {
  font-size: 0.95rem;
  color: #333;
  margin: 0;
}

.eventInfo {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.eventAction {
  align-self: center;
}


</style>