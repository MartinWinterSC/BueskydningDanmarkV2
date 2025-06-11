<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseCard from '@/components/Cards/BaseCard.vue';

// Static images for each category
import recurve from '@/assets/Billeder/recurveLandshold.jpg';
import compound from '@/assets/Billeder/compoundLandshold.jpg';
import threeD from '@/assets/Billeder/3DLandsholdet.jpg';
import mens from '@/assets/Billeder/mandLandshold.jpg';
import womens from '@/assets/Billeder/kvindeLandshold.png';
import youth from '@/assets/Billeder/ungdomsLandshold.jpg';

// Sets up the function needed for using the Vue router (Being able to go between pages)
const router = useRouter();

// Pushes the user to the NationalTeamView with addition to the adding the params "team.slug" to the URL so it uses the same page for all teams but shows different content
function handleClick(team) {
  router.push({ name: 'NationalTeamView', params: { category: team.slug } });
}

// Static list of each national team category, used for defining the destination above
// (Slugs in this case is much like ID in news, but because it's defined by an ACF instead of a post ID, slugs were neccessary)
const NationalTeams = ref([
  { slug: 'recurve', name: 'Recurve landsholdet', image: recurve },
  { slug: 'compound', name: 'Compound landsholdet', image: compound },
  { slug: '3d', name: '3D landsholdet', image: threeD },
  { slug: 'man', name: 'Herre landsholdet', image: mens },
  { slug: 'woman', name: 'Kvinde landsholdet', image: womens },
  { slug: 'youth', name: 'Ungdoms landsholdet', image: youth },
]);
</script>

<template>
<main>
  <div class="headerSection">
    <div class="titleWithLine">
      <h1>Landshold</h1>
      <div class="line"></div>
    </div>
  </div>
  <section class="BaseSection">
    <div class="Container">
<!-- Load each card with the relevant data from the static content set up in the script -->
      <BaseCard
        v-for="team in NationalTeams"
        :key="team.id"
        :variant="'Simple'"
        :title="team.name"
        :image="team.image"
        @click="handleClick(team)"
        />
    </div>
  </section>
</main>
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