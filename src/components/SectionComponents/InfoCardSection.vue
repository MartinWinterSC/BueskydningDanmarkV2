<script setup>
import { ref, onMounted } from 'vue';
import fællesskab from '@/assets/Billeder/fællesskab.svg';
import Elite from '@/assets/Billeder/Elite.svg';
import Laurbaur from '@/assets/Billeder/Laurbær.svg';
import international from '@/assets/Billeder/international.svg';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 1000);
});

const cards = [
  {
    title: '3000 medlemmer',
    description: 'Vi har over 3.000 medlemmer fordelt på 60 klubber over hele landet',
    icon: fællesskab, 
  },
  {
    title: 'Elite og Bredde',
    description: 'Vi støtter både eliteudøvere og breddeklubber – Alle niveauer er velkomne',
    icon: Elite,
  },
  {
    title: '80 års erfaring',
    description: 'Med over 80 års erfaring arbejder vi på at fremme sporten i hele Danmark',
    icon: Laurbaur,
  },
  {
    title: 'World Archery',
    description: 'Vi er tilknyttet World Archery og repræsenterer Danmark internationalt',
    icon: international
  },
];
</script>

<template>
  <div class="cards">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
      :class="{ animate: isVisible }"
      :style="{ animationDelay: `${index * 0.3}s` }"
    >
      <div class="icon">
        <img :src="card.icon" alt="" />
      </div>
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>


<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: start;
  padding-top: 2rem;
  padding-bottom: var(--space-xl);
  position: relative;
}

.card {
  background-color: var(--Main-color); 
  color: white;
  width: 15rem;
  height: 20rem;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;

  opacity: 0;
  transform: translateY(30px);
}

.card:nth-child(2),
.card:nth-child(3) {
  margin-top: -3rem; 
}

.card.animate {
  animation: fadeUp 0.10s ease-out forwards;
}

.card p {
  color: white;
}

.card h3 {
  font-size: 1.25rem;
  margin: .5rem;
}

.card .icon img {
  width: 7rem;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
}

/* Animation */
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsiv */
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .card:nth-child(2),
  .card:nth-child(3) {
    margin-top: 0; /* Fjern løft på mindre skærme */
  }
}

@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

</style>

