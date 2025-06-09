<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import AthleteCard from '@/components/Cards/AtheleteCard.vue';
import AtheleteModal from '@/components/Modals/AtheleteModal.vue';

const props = defineProps({
  category: String,
});

const baseURL = 'https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/';
const athletes = ref([]);
const selectedAthlete = ref(null);
const showModal = ref(false);
const route = useRoute();

onMounted(() => {
  fetch(baseURL + 'nationalteam?per_page=100&_embed')
    .then((response) => response.json())
    .then((data) => {
      athletes.value = data
        .filter((post) =>
          post.acf?.nationalTeamCategory?.includes(props.category.toLowerCase())
        )
        .map((post) => ({
          id: post.id,
          name: post.title.rendered,
          category: post.acf?.nationalTeamCategory?.[0] || '',
          club: post.acf?.clubName || '',
          birthdate: post.acf?.birthday || '',
          bow: post.acf?.nationalTeamCategory?.[0] || '',
          bestScore: post.acf?.bestScore || '',
          worldRanking: post.acf?.worldRanking || '',
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
          banner: post.acf?.profileHero || '',
          clubLogo: post.acf?.clubLogo || '',
          gender: post.acf?.gender || '',
          instagram: post.acf?.socialMedia || '',
          worldArchery: post.acf?.internationalCompetitions || ''
        }));

      console.log(`✅ Athletes fetched for category: ${props.category}`, athletes.value);
    })
    .catch((error) =>
      console.error('Something went wrong, check your code dumbass', error)
    );
});

function handleClick(athlete) {
  selectedAthlete.value = athlete;
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
}
</script>

<template>
<div class="headerSection">
  <div class="titleWithLine">
    <h1>Landsholdet {{ category }}</h1>
    <div class="line"></div>
  </div>
</div>
<section class="BaseSection">
  <div class="Container">
    <AthleteCard
      v-for="athlete in athletes"
      :key="athlete.id"
      :athlete="athlete"
      @cardClicked="handleClick"
    />
  </div>
</section>
<AtheleteModal
  :athlete="selectedAthlete"
  :visible="showModal"
  @close="closeModal"
/>
</template>

<style scoped>
.BaseSection {
  padding: 2rem;
}
.Container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.Container > * {
  flex: 1 1 100%; 
  max-width: 100%;
}
@media (min-width: 640px) {
  .Container > * {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }
}
@media (min-width: 1024px) {
  .Container > * {
    flex: 1 1 calc(33.333% - 1rem);
    max-width: calc(33.333% - 1rem);
  }
}
</style>