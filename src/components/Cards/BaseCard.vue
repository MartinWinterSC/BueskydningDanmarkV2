<script setup>
import StandardBtn from '../Buttons/StandardBtn.vue';

const props = defineProps({
    // Define any props if needed
    variant: {
        type: String,
       required: true,
    },
     title:{
        type: String,
        required: false,
        default: ''
    },
    summary: {
        type: String,
        required: false,
        default: ''
    },
    date: {
        type: String,
        required: false,
        default: ''
    },
    image: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },

});
</script>

<template>
  <!-- Horizontal variant -->
  <div v-if="variant === 'horizontalNews'" class="CardHorizontal">
    <div class="CardImageHorizontal">
      <img :src="image" alt="Card Image" />
    </div>
    <div class="CardContentHorizontal">
      <h3 class="cardTitle">{{ title }}</h3>
      <p class="CardSummary">{{ summary }}</p>
      <div class="CardFooterHorizontal">
        <StandardBtn variant="action" @click="$emit('click')">Læs mere</StandardBtn>
      </div>
    </div>
  </div>

  <!-- Vertical layout (News, Simple) -->
 <div v-else class="CardLinkWrapper" @click="$emit('click')">
  <div class="Card" :class="variant">
    <div class="CardImage">
      <img :src="image" alt="Card Image" />
    </div>
    
      <div class="CardContent">
        <h3 class="cardTitle">{{ title }}</h3>
      
        <template v-if="variant === 'News'">
          <p class="CardDate">{{ date }}</p>
          <p class="CardSummary">{{ summary }}</p>
          <div class="CardFooter">
            <StandardBtn variant="primary">Læs mere</StandardBtn>
          </div>
        </template>
      
        <template v-else-if="variant === 'Simple'">
          <!-- No extra content for Simple -->
        </template>
      </div>
    </div>
  </div>
</template>


<style scoped>
.cardTitle {
  font-size: 1.1rem;
  color: black;
  font-weight: bold;
}

.CardSummary {
  font-size: 0.95rem;
  color: black;
}

.CardDate {
  font-size: 0.9rem;
  color: black;
}

/* Vertikalt layout */
.Card {
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
}

.CardImage img{
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

.CardContent {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

a{
  text-decoration: none;
}

.CardFooter {
  padding: var(--space-sm);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Horisontalt layout */
.CardHorizontal {
  display: flex;
  gap: 1rem;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  align-items: center;
  max-width: 500px;
}

.CardImageHorizontal {
  flex-shrink: 0;
  width: 150px;
  height: 100px;
}

.CardImageHorizontal img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.CardContentHorizontal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.CardFooterHorizontal {
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-start;
}

/* Card animationer */
.Card.Simple:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>