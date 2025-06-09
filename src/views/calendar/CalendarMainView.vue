<script setup>
import { computed, ref } from 'vue';
import EventCard from '@/components/Cards/CalendarCards.vue'
import Calendar from '@/components/Calendar.vue';

const events = ref([
  {
    date: '2025-06-10',
    title: 'Møde med kunden',
    type: 'møde',
    description: 'Vi mødes med kunden for at diskutere næste fase.',
    time: '10:00',
    location: 'København',
    image: 'https://via.placeholder.com/150'
  },
  {
    date: '2025-06-12',
    title: 'Marketingkampagne starter',
    type: 'marketing',
    description: 'Kampagnen starter for vores nye produkt.',
    time: '09:00',
    location: 'Online',
    image: 'https://via.placeholder.com/150'
  }
])

const defaultType = ref('alle');

const eventTypes = computed(() => {
  const types = events.value.map(e => e.type);
  return ['alle', ...new Set(types)];
});

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
  <Calendar :events="events"/>
  </div>
  <section>
   <div class="titleWithLine">
      <div class="line"></div>
   </div>
   <section class="filterSection">
    <label for="eventType">Filtrér efter type:</label>
    <select id="eventType" v-model="defaultType">
      <option v-for="type in eventTypes" :key="type" :value="type">{{ type }}</option>
    </select>
  </section>
  <section>
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