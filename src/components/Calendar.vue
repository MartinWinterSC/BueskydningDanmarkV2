<script setup>
import { ref, computed, onMounted, onBeforeUnmount} from 'vue'

const props = defineProps({
  events: {
    type: Array,
    default: () => [] //Fallback hvis ingen events gives. 
  }
})

//states
const selectedEvent  = ref(null); //State til at holde styr på det valgte event som vises i popup
const showPopup = ref(false); //State til at holde styr på om popup er åben eller lukket
const popupPosition = ref({ top: 0, left: 0 }) // Positionen for popup'en (top og venstre i pixels)

//State (reaktive refs) til nholde styr på måned og år som bliver initialsieret til dags dato.
const currentMonth = ref(new Date().getMonth()); //Januar = 0 og December = 11
const currentYear = ref(new Date().getFullYear()); 

//Uge dagene og måneder til visning på kalenderen
const weekdays = ['Man', 'Tir', 'Ons', 'Tors', 'Fre', 'Lør', 'Søn'];
const Months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

//Vi beregner alle dagene som skal vises i kalenderen, inklusiv dagene fra forrige og næste månede til at udfylde ugerne
const calendarDays = computed(() => {
  const days = [];

//Første dag i måned, her tager vi den aktuelle måned og år fra vores refs og sætter datoen til 1 for at få den første dag i måneden.
const firstDayofMonth = new Date(currentYear.value, currentMonth.value, 1);
//sidste dag i måned - vi sætter 1,0 for at den retunrere den sidste dag i den aktuelle måned da javascript Date API giver en sidste dag i måned hvis du sætter den til 0.
const lastDayofMonth = new Date(currentYear.value, currentMonth.value + 1,0); //Vi sætter datoen til 0 for at få sidste dag i forrige måned)
const startDay = (firstDayofMonth.getDay() +6) % 7; // getDay returnerer 0 for søndag og mandag som 1 - men I danmark køre vi med mandag som første dag altså 0. ved at bruge (getDay() + 6) % 7 flytter vi søndag til slutningen af ugen.
const totalDays = lastDayofMonth.getDate();

//Her tilføjer vi tomme dagee fra de forrige månede
  for (let i = 0; i < startDay; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i - startDay + 1)
    days.push(date) //pusher dag fra forrige måned
  }

  //Her tilføjer vi dagene fra den aktuelle måned 
  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i)
    days.push(date)
  }
  // Her tilføjer vi dagene fra næste månede for at få 7 kolonner
 while (days.length % 7 !== 0) {
    const lastDate = days[days.length - 1];
    const nextDate = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1);
    days.push(nextDate);
  }

  return days;
});

//Funktion som formatterer en dato til dansk format ergo dd-mm-yyyy
function danishDateFormat(date){
  const day = String(date.getDate()).padStart(2,'0');
  const month = String(date.getMonth()+1).padStart(2,'0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

//Retrnerer events for en given data ved at samligne dataformat
function getEventsForDate(date) {
  const formatted = danishDateFormat(date);
  return props.events.filter(event => event.date === formatted);
}

//Tjekker om datoen er dagens dato - returnerer true hvis datoen matcher dagens dato får styling, (blåt hue)
function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

//Funktion til at gå til den forrige måned som også håndterer skift af år.
function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
}
//Funktion til at gå til den Næste måned som også håndterer skift af år.
function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
}
// Funktion til at åbne popup'en når der klikkes på et event
function openPopup(event, e) {
  selectedEvent.value = event;
  showPopup.value = true;

  // Beregn positionen for popup'en baseret på det klikkede element
  const rect = e.target.getBoundingClientRect();
  popupPosition.value = {
    top: rect.top + window.scrollY + 10, // 10px under event
    left: rect.left + window.scrollX + 50 // 10px til højre
  };
}

// Reactive ref som bestemmer om skærmstørrelsen er mobil (under eller lig med 600px bredde)
const isMobile = ref(false);
//on mounted som sætter isMobile til true hvis skærmen er mindre end eller lig med 600px bredde og lytter på resize event for at opdatere isMobile.
onMounted(() => {
  isMobile.value = window.innerWidth <= 600;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 600;
  });
});

// onBeforeUnmount for at fjerne event listeneren når komponenten unmountes
const handleClickOutside = (e) => {
  const popupEl = document.querySelector('.popup');
  // Hvis popup'en er åben og klikker udenfor popup'en, luk popup'en
  if (popupEl && !popupEl.contains(e.target)) {
    showPopup.value = false;
    selectedEvent.value = null;
  }
};
// Lytter på klik på dokumentet for at lukke popup'en hvis der klikkes udenfor
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});
// Fjerner event listeneren når komponenten unmountes for at undgå hukommelseslækager
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="calendar">
    <div class="calendarHeader">
      <button class="navButton" @click="prevMonth">‹</button>
     <h2>{{ Months[currentMonth] }} {{ currentYear }}</h2>
      <button class="navButton" @click="nextMonth">›</button>
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
      >
         <div class="dateNumber">{{ day.getDate() }}</div>
        <ul class="events">
          <li v-for="(event, index) in getEventsForDate(day)" :key="index" :class="'event ' + event.type"  @click.stop="openPopup(event, $event)">{{ event.title }}</li>
        </ul>
      </div>
    </div>
  </div>
  <transition name ="fade">
    <!-- Popup for displaying event details -->
    <div
      v-if="showPopup"
      class="popup"
      :class="{ mobilePopup: isMobile }"
      :style="!isMobile ? { top: popupPosition.top + 'px', left: popupPosition.left + 'px' } : null"
    >
      <h3>{{ selectedEvent.title }}</h3>
      <p><strong>Dato:</strong> {{ selectedEvent.date }}</p>
      <p><strong>Type:</strong> {{ selectedEvent.type }}</p>
      <p v-if="selectedEvent.description"><strong>Beskrivelse:</strong> {{ selectedEvent.description }}</p>
    
    </div>
</transition>
</template>

<style scoped>
.calendar {
  max-width: 1000px; 
  width: 80%;
  margin: auto;
  font-family: sans-serif;
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
  color: black;
}

.navButton {
  background-color: var(--BtnColor);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.navButton:hover {
  background-color: var(--BtnColorhover);
}

.weekdays, .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.weekday {
  font-weight: bold;
  padding: 0.75rem 0;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

.day {
  border: 1px solid #f0f0f0;
  padding: 0.20rem;
  aspect-ratio: 1 / 1; 
  cursor: pointer;
  background-color: white;
  position: relative;
  transition: background-color 0.2s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

.event.træning {
  background-color: #007bff;
}

.event.konkurrence {
  background-color: #c92639;
}

.event.workshop {
  background-color: #28a745;
}

.event.socialt {
  background-color: #c231aa;
}

.popup {
  position: absolute;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-width: 300px;
  width: max-content;
}

.popup.mobilePopup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  width: 90vw;
}

.popup h3 {
  margin-top: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@media (max-width: 600px) {
  .calendar {
    max-width: 100%;
    font-size: 12px;
  }

  .day {
    padding: 0.2rem;
    aspect-ratio: 1 / 1;
    min-height: auto;
  }

  .dateNumber {
    font-size: 0.8rem;
  }

  .event {
    font-size: 0.6rem;
    padding: 1px 4px;
  }

  .calendarHeader h2 {
    font-size: 1.2rem;
  }

  .navButton {
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
  }
}

</style>
