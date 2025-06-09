<script setup>
import { ref, computed, } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
})

const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

const weekdays = ['Man', 'Tir', 'Ons', 'Tors', 'Fre', 'Lør', 'Søn'];
const Months = ['Januar', 'Febuar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

const calendarDays = computed(() => {
  const days = [];

//Første dag i måned
const firstDayofMonth = new Date(currentYear.value, currentMonth.value, 1);
//sidste dag i måned - vi sætter 1,0 for at den retunrere den sidste dag i den aktuelle måned da javascript Date API giver en sidste dag i måned hvis du sætter den til 0.
const lastDayofMonth = new Date(currentYear.value, currentMonth.value + 1,0);
const startDay = firstDayofMonth.getDay();
const totalDays = lastDayofMonth.getDate();

  for (let i = 0; i < startDay; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i - startDay + 1)
    days.push(date)
  }

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i)
    days.push(date)
  }

 while (days.length % 7 !== 0) {
    const lastDate = days[days.length - 1];
    const nextDate = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1);
    days.push(nextDate);
  }

  return days;
});

function getEventsForDate(date) {
  const dayString = date.toISOString().split('T')[0]
  return props.events.filter(event => event.date === dayString)
}


function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
}
</script>

<template>
  <div class="calendar">
    <div class="calendarHeader">
      <button @click="prevMonth">‹</button>
     <h2>{{ Months[currentMonth] }} {{ currentYear }}</h2>
      <button @click="nextMonth">›</button>
    </div>

    <div class="weekdays">
      <div v-for="day in weekdays" :key="day">{{ day }}</div>
    </div>
    
    <div class="days">
      <!--v-for loop som kører-->
    <!-- toISOString metoden retunrere et dato objekt som en string med ISO standard hvilekn er en dato format som  YYYY-MM-DDTHH:mm:ss.sssZ -->
     <div
        v-for="day in calendarDays"
        :key="day.toISOString()"
        class="day"
        :class="{ today: isToday(day), 'otherMonth': day.getMonth() !== currentMonth }"
        @click="addEvent(day)"
      >
         <div class="dateNumber">{{ day.getDate() }}</div>
        <ul class="events">
          <li v-for="(event, index) in getEventsForDate(day)" :key="index" :class="'event ' + event.type">{{ event.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>



<style scoped>
.calendar {
  max-width: 600px;
  margin: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.calendarHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
}

.calendarHeader h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.navButton {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.navButton:hover {
  background-color: #e9ecef;
}

.weekdays, .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.weekdays {
  background-color: #f8f9fa;
}

.weekday {
  font-weight: bold;
  padding: 0.75rem 0;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  color: #666;
  font-size: 0.9rem;
}

.day {
  border: 1px solid #f0f0f0;
  padding: 0.5rem;
  min-height: 100px;
  cursor: pointer;
  position: relative;
  background-color: white;
  transition: background-color 0.2s;
}

.day:hover {
  background-color: #f8f9fa;
}

.day.today {
  background-color: #e3f2fd;
  border: 2px solid #2196f3;
}

.day.otherMonth {
  background-color: #fafafa;
  color: #ccc;
}

.day.otherMonth .dateNumber {
  color: #ccc;
}

.dateNumber {
  font-weight: bold;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  color: #333;
}


.events {
  list-style: none;
  padding: 0;
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
}

.event {
  padding: 2px 6px;
  border-radius: 4px;
  margin-bottom: 2px;
  color: white;
}

.event.møde {
  background-color: #007bff;
}

.event.marketing {
  background-color: #28a745;
}
</style>
