<script setup>
import { ref, computed } from 'vue';
import ClubKort from '@/components/SectionComponents/ClubKort.vue';
import AalborgLogo from '@/assets/Billeder/AalborgLogo.png';
import AarhusLogo from '@/assets/Billeder/AarhusLogo.png';
import OdenseLogo from '@/assets/Billeder/OdenseLogo.jpg';
import Copenhagen from '@/assets/Billeder/CopenhagenLogo.png'


const clubs = ref([
  { id: 1, name: 'København Bueskytteklub', 
  lat: 55.6761, lng: 12.5683, 
  city: 'København',
  region: 'Sjælland', 
  phone: '45 11 22 33', 
  logo: Copenhagen 
},

  { id: 2, 
    name: 'Aarhus Bueskytteforening', 
    lat: 56.1629, 
    lng: 10.2039, 
    city: 'Aarhus', 
    region: 'Midtjylland', 
    phone: '45 44 55 66', 
    logo: AarhusLogo 
},

  { id: 3, 
    name: 'Odense Bueskyttelaug', 
    lat: 55.4038, 
    lng: 10.4024, 
    city: 'Odense', 
    region: 'Sydjylland', 
    phone: '45 77 88 99', 
    logo: OdenseLogo 
},
  { id: 4, 
    name: 'Nordjylland Bueskyttelaug', 
    lat: 57.0488, 
    lng: 9.9217, 
    city: 'Aalborg', 
    region: 'Nordjylland', 
    phone: '45 88 77 66', 
    logo: AalborgLogo 
}
])

const regions = ['Alle', 'Nordjylland', 'Midtjylland', 'Sydjylland', 'Sjælland']
const selectedRegion = ref('Alle')
const selectedClub = ref(null)

function handleClubClick(club) {
  selectedClub.value = club
}

const sortedClubs = computed(() => {
  let filtered = selectedRegion.value === 'Alle'
    ? clubList.value
    : clubList.value.filter(club => club.region === selectedRegion.value)

  if (selectedClub.value) {
    const selectedId = selectedClub.value.id
    filtered = [
      ...filtered.filter(club => club.id === selectedId),
      ...filtered.filter(club => club.id !== selectedId)
    ]
  }

  return filtered
})
</script>

<template>
<main>
  <div class="headerSection">
    <div class="titleWithLine">
      <h1>Klub Oversigt</h1>
      <div class="line"></div>
    </div>
  </div>
  <section class="contentSection">
    <div class="mapWrapper">
      <ClubKort :clubs="clubList" @club-clicked="handleClubClick" />
    </div>
    <div class="sidebar">
      <label for="regionFilter">Filtrer efter region:</label>
      <select id="regionFilter" v-model="selectedRegion">
        <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
      </select>
      <div v-if="selectedClub" class="clubInfo">
        <h2>{{ selectedClub.name }}</h2>
        <p><strong>By:</strong> {{ selectedClub.city }}</p>
        <p><strong>Telefon:</strong> {{ selectedClub.phone }}</p>
        <p><strong>Region:</strong> {{ selectedClub.region }}</p>
      </div>
      <ul class="clubList">
        <li
          v-for="club in sortedClubs"
          :key="club.id"
          :class="{ selected: selectedClub && club.id === selectedClub.id }"
          @click="handleClubClick(club)"
        >
          <img :src="club.logo" alt="logo" class="clubLogo" />
          <div>
            <h3>{{ club.name }}</h3>
            <p>{{ club.city }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</main>
</template>

<style scoped>
.contentSection {
  display: flex;
  gap: 20px;
  padding-bottom: 1rem;
}
.mapWrapper {
  flex: 2;
  min-width: 0;
}
.sidebar {
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}
#regionFilter {
  margin-bottom: 10px;
  padding: 4px 8px;
}
.clubList {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  overflow-y: auto;
  max-height: 400px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.clubList li {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;
}
.clubList li:last-child {
  border-bottom: none;
}
.clubList li:hover {
  background-color: #f0f0f0;
}
.clubList li.selected {
  background-color: #d0eaff;
  font-weight: bold;
}
.clubLogo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: contain;
}
.clubInfo {
  border-top: 1px solid #ccc;
  padding-top: 10px;
}

@media (max-width: 768px) {
  .contentSection {
    flex-direction: column;
  }

  .mapWrapper {
    order: 1;  /* Sørg for at mappen kommer først */
  }

  .sidebar {
    order: 2;  /* Listen under */
    max-width: 100%;
    margin-top: 1rem;
  }

  .clubList {
    max-height: 300px; /* evt. juster højde på listen */
  }
}
</style>