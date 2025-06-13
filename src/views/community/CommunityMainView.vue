<script setup>
import { ref, onMounted } from 'vue';
import TextImageSection from '@/components/SectionComponents/TextImageSection.vue';
import BaseCard from '@/components/Cards/BaseCard.vue';
import StandardBtn from '@/components/Buttons/StandardBtn.vue';
import communityHero from '@/assets/Billeder/Community.png';
import { useRouter } from 'vue-router';

// Sets up the arrays to hold fetched content for each section
const Magasincards = ref([]);
const Newscards = ref([]);
const Forumscards = ref([]);

// Sets up the function needed for using the Vue router (Being able to go between pages)
const router = useRouter();

// Navigates to the article view adding the ID at the end of the URL for use to specify the content under the page
const goToArticle = (id, type) => {
  router.push({ name: 'Artikle', query: { id, type } });
};

//  Navigate to a route path
const goTo = (path) => {
  if (path) {
    router.push(path);
  }
};

// Ensures the retrived data doesn't have any HTML tags attached when fetched (WordPress sends this data within base data structure)
const stripHtml = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

// Shortens the text recieved to ensure the textbox doesn't get overly big, adds the "..." to the end show there is more
const shortenText = (text, length = 100) => {
  return text.length > length ? text.slice(0, length) + '...' : text;
};

// Sets base URL for the fetch request coming later, this path is universal across all fetch requests
const baseURL = "https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/";

// Actual fetch request, specifically from "news", "forum", and "print" custom post type, only takes the first 3 of each
onMounted(() => {
  fetch(`${baseURL}news?per_page=3&_embed`)
    .then(res => res.json())
    .then(data => {
      Newscards.value = data.map(post => ({
        id: post.id,
        variant: 'News',
        title: post.title.rendered,
        date: post.date?.slice(0, 10),
        summary: shortenText(stripHtml(post.content?.rendered || '')),
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        link: post.link || '#'
      }));
    })
    .catch(err => console.error("News fetch error:", err));

  fetch(`${baseURL}forum?per_page=3&_embed`)
    .then(res => res.json())
    .then(data => {
      Forumscards.value = data.map(post => ({
        id: post.id,
        variant: 'Simple',
        title: post.title.rendered,
        summary: shortenText(stripHtml(post.content?.rendered || '')),
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        link: post.link || '#'
      }));
    })
    .catch(err => console.error("Forum fetch error:", err));

  fetch(`${baseURL}print?per_page=3&_embed`)
    .then(res => res.json())
    .then(data => {
      Magasincards.value = data.map(post => ({
        variant: 'Simple',
        title: post.title.rendered,
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        link: post.acf?.printPDF || '#'
      }));
    })
    .catch(err => console.error("Print fetch error:", err));

});
</script>

<template>
<main>
  <section class="headerSection">
    <div class="titleWithLine">
      <h1>Fællesskabet</h1>
      <div class="line"></div>
    </div>
<!-- Static text -->
    <TextImageSection 
      Breadtekst="Velkommen til Fællesskabet. Dette er stedet, hvor du kan holde dig opdateret med nyheder fra bueskydningsverdenen, dykke ned i inspirerende magasiner, udforske tidligere indhold og deltage i forummet, hvor du kan stille spørgsmål, dele erfaringer og hjælpe andre bueskyttere."
      :image="communityHero" 
    />
  </section>
  <section class="headerSection"> 
    <div class="titleWithLine">
      <h2>News</h2>
      <div class="line"></div>
    </div>
<!-- Renders the cards for "news" -->
    <div class="cardGrid">
      <BaseCard 
        v-for="(card, index) in Newscards"
        :key="`news-${index}`"
        v-bind="card"
        variant="News"
        @click="goToArticle(card.id, 'news')"
      />
    </div>
    <div class="seeMoreBtnContainer">
      <StandardBtn variant="primary" @click="goTo('/newsView')">Se flere Nyheder</StandardBtn>
    </div>
  </section>
  <section class="headerSection"> 
    <div class="titleWithLine">
      <h2>Forum</h2>
      <div class="line"></div>
    </div>
<!-- Renders the cards for "forum" -->
    <div class="cardGrid">
      <BaseCard 
        v-for="(card, index) in Forumscards"
        :key="`forum-${index}`"
        v-bind="card"
        variant="News"
        @click="goToArticle(card.id, 'forum')"
      />
    </div>
    <div class="seeMoreBtnContainer">
      <StandardBtn variant="primary" @click="goTo('/ForumView')">Se flere Posts</StandardBtn>
    </div>
  </section>
  <section class="headerSection" id="print"> 
  <div class="titleWithLine">
    <h2>Magasiner</h2>
    <div class="line"></div>
  </div>
<!-- Renders the cards for "magazine (print, used interchangeably)" -->
  <div class="cardGrid">
    <a
      v-for="(card, index) in Magasincards"
      :key="`magazine-${index}`"
      :href="card.link"
      target="_blank"
      rel="noopener"
      class="CardLinkWrapper"
    >
      <BaseCard
        v-bind="card" 
        variant="News"
      />
    </a>
  </div>
  <div class="seeMoreBtnContainer">
    <StandardBtn variant="primary">Se flere magasiner</StandardBtn>
  </div>
</section>
</main>
</template>

<style scoped>
.seeMoreBtnContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  justify-content: center;
  max-width: 1000px;
  margin-top: 1rem;
}
@media (min-width: 640px) {
  .cardGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .cardGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>