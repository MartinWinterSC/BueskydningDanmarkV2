<script setup>
import { onMounted, defineProps, ref } from 'vue'

const props = defineProps({
  clubs: Array
})

const emit = defineEmits(['club-clicked'])

const map = ref(null)

onMounted(() => {
  map.value = L.map('map', {
  center: [56.0, 10.0],
  zoom: 6,
  minZoom: 6,
  maxZoom: 12,
  maxBounds: [
    [54.4, 7.5],   
    [58.0, 15.5]   
  ],
  maxBoundsViscosity: 1.0 
})

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map.value)

   props.clubs.forEach(club => {
    const marker = L.marker([club.lat, club.lng])
      .addTo(map.value)
      .bindPopup(`<b>${club.name}</b>`)

    marker.on('click', () => {
      emit('club-clicked', club)
    })
  })
})
</script>

<template>
  <div id="map" style="height: 500px; width: 100%; border-radius: 8px;"></div>
</template>

<style scoped>
/* Ekstra sikkerhed hvis Leaflet styles mangler */
#map {
  z-index: 0;
}
</style>
