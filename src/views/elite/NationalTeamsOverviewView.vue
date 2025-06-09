<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import BaseCard from '@/components/Cards/BaseCard.vue';

  import recurve from '@/assets/Billeder/recurveLandshold.jpg';
  import compound from '@/assets/Billeder/compoundLandshold.jpg';
  import threeD from '@/assets/Billeder/3DLandsholdet.jpg';
  import mens from '@/assets/Billeder/mandLandshold.jpg';
  import womens from '@/assets/Billeder/kvindeLandshold.png';
  import youth from '@/assets/Billeder/ungdomsLandshold.jpg';

  const router = useRouter();

  function handleClick(team) {
    router.push({ name: 'NationalTeamView', params: { category: team.slug } });
  }

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