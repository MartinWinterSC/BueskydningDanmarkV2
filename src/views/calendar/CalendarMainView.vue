<script setup>
import { computed, ref } from 'vue';
import EventCard from '@/components/Cards/CalendarCards.vue'
import Calendar from '@/components/Calendar.vue';

// Static content for each club with the information
const events = ref([
  {
    date: '15-06-2025',
    title: 'National Bueskydningstræning',
    type: 'træning',
    description: 'Intensiv træning for landsholdet på Bueskydningscenteret i Odense.',
    time: '18:00',
    location: 'Odense Bueskydningscenter',
    image: 'https://via.placeholder.com/150?text=Træning'
  },
  {
    date: '20-06-2025',
    title: 'Regionale Bueskydningsmesterskaber',
    type: 'konkurrence',
    description: 'Årlig konkurrence for bueskytter i Region Midtjylland.',
    time: '09:00',
    location: 'Aarhus Stadion',
    image: 'https://via.placeholder.com/150?text=Konkurrence'
  },
  {
    date: '25-06-2025',
    title: 'Workshop: Teknik og Præcision',
    type: 'workshop',
    description: 'Lær nye teknikker til at forbedre din præcision med instruktør Jesper.',
    time: '14:00',
    location: 'København Bueskydningsklub',
    image: 'https://via.placeholder.com/150?text=Workshop'
  },
  {
    date: '28-06-2025',
    title: 'Social Bueskydning & Grill',
    type: 'socialt',
    description: 'Kom til en hyggelig aften med bueskydning og grill for alle medlemmer.',
    time: '17:00',
    location: 'Bueskydningsklubben, Aarhus',
    image: 'https://via.placeholder.com/150?text=Socialt'
  },
  {
    date: '05-07-2025',
    title: 'Junior Landsholdstræning',
    type: 'træning',
    description: 'Træning for juniorspillere med fokus på teknik og teamwork.',
    time: '16:00',
    location: 'Odense Bueskydningscenter',
    image: 'https://via.placeholder.com/150?text=Junior+Træning'
  }
])

// Currently selected filter type (default shows all)
const defaultType = ref('alle');

// Create the event types for the dropdown filter
const eventTypes = computed(() => {
  const types = events.value.map(e => e.type);
  return ['alle', ...new Set(types)];
});

// The functioning filter, decided by the dropdown above
const filteredEvents = computed(() => {
    if (defaultType.value ==='alle') return events.value;
    return events.value.filter(event => event.type ===defaultType.value)
});
</script>

<template>
<main>
  <div class="headerSection">
  <div class="titleWithLine">
    <h1>Kalender</h1>
    <div class="line"></div>
  </div>
<!-- Calendar component receives all events as props -->
  <Calendar :events="events"/>
  </div>
  <section>
    <div class="titleWithLine">
      <div class="line"></div>
    </div>
    <section class="filterSection">
<!-- Filter dropdown bound to `defaultType` -->
    <label for="eventType">Filtrér efter type:</label>
    <select id="eventType" v-model="defaultType">
      <option v-for="type in eventTypes" :key="type" :value="type">{{ type }}</option>
    </select>
  </section>
  <section>
<!-- Render filtered events using EventCard component -->
    <EventCard
      v-for="(event, index) in filteredEvents"
      :key="index"
      :title="event.title"
      :description="event.description"
      :date="event.date"
      :time="event.time"
      :location="event.location"
      :image="event.image"
      buttonText="Læs mere"
    />
  </section>
  </section>
</main>
</template>

<style>
.filterSection {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
.filterSection label {
  font-weight: bold;
  font-size: 1rem;
}
select {
  padding: 0.6rem 1rem;
  min-width: 8rem;
  font-size: 1rem;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  transition: border-color 0.3s, box-shadow 0.3s;
  background-size: 1rem;
  cursor: pointer;
}
</style>