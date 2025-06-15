<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BaseCard from '@/components/Cards/BaseCard.vue';
import StandardBtn from '@/components/Buttons/StandardBtn.vue';
import NewsletterModal from '@/components/Modals/NewsletterModal.vue';

// 1: Controls visibility of the newsletter signup modal (by default set to not be visible)
// 2: Stores the most recent news post, shown as the featured article
// 3: Stores 2 additional recent news items shown in the sidebar
// 4: Stores the full list of news posts for the grid section
const showNewsletterModal = ref(false);
const featuredNews = ref(null);
const sidebarNews = ref([]);
const articleCards = ref([]);

// Sets up the function needed for using the Vue router (Being able to go between pages)
const router = useRouter();

// Navigates to the article view adding the ID at the end of the URL for use to specify the content under the page
const goToArticle = (id) => {
  router.push({ name: 'Artikle', query: { id, type } });
};

// Opens the newsletter modal when button is clicked
const openNewsletterModal = () => {
  showNewsletterModal.value = true;
};

// Handles form submission from the newsletter modal
const handleNewsletterSubmit = (formData) => {
  console.log('Newsletter signup data:', formData);
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
const baseUrl = 'https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/';

// Actual fetch request, specifically from "news" custom post type
onMounted(() => {
  fetch(`${baseUrl}news?per_page=100&_embed`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const cleaned = data.map(post => ({
          id: post.id,
          title: post.title?.rendered,
          summary: shortenText(stripHtml(post.content?.rendered || '')),
          date: new Date(post.date).toLocaleDateString('da-DK'),
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        }));

// 1: Sets featuredNews to be the first in the object array retrieved
// 2: Sets sidebarNews to be 2 and 3 in the object array retrieved
// 3: Sets articleCards to include all objects from the array retrieved (was meant to say 3 instead of 0, which would mean it would display all objects AFTER the 3rd)
        featuredNews.value = cleaned[0];
        sidebarNews.value = cleaned.slice(1, 3);
        articleCards.value = cleaned.slice(0);
      }
    })
    .catch(err => console.error('News fetch error:', err));
});
</script>

<template>
<main>
  <div class="headerSection">
    <div class="titleWithLine">
      <h1>Nyheder</h1>
    </div>
    <div class="headerSection">
      <div class="titleWithLine">
        <h2>Seneste Nyheder</h2>
        <div class="line"></div>
      </div>
    </div>
    <div class="contentWrapper">
      <section class="contentSection">
<!-- Renders the featured article -->
        <div
          class="featuredNews"
          v-if="featuredNews"
          @click="goToArticle(featuredNews.id)"
        >
<!-- Renders the image attached -->
          <div class="newsImage">
            <img
              :src="featuredNews.image"
              :alt="featuredNews.title"
            />
          </div>
<!-- Renders the content of the featured article -->
          <div class="newsContent">
            <h3 class="newsTitle" v-html="featuredNews.title"></h3>
            <p class="newsExcerpt">{{ featuredNews.summary }}</p>
            <StandardBtn class="readMoreBtn" variant="primary">Læs mere</StandardBtn>
          </div>
        </div>
      </section>
<!-- Renders the newsletter -->
      <aside class="sidebar">
        <div class="newsletterSection">
          <h3 class="newsletterTitle">Tilmeld dig vores nyhedsbrev her</h3>
          <p class="newsletterText">
            Skriv dig op til vores nyhedsbrev og hold dig opdateret på det nyeste som sker
          </p>
          <StandardBtn variant="primary" @click="openNewsletterModal">Tilmeld nyhedsbrev</StandardBtn>
        </div>
<!-- Renders the two articles on the side -->
        <div class="sidebarNews">
          <BaseCard
            v-for="post in sidebarNews"
            :key="`news-${index}`"
            variant="horizontalNews" 
            :title="post.title"
            :summary="post.summary"
            :date="post.date"
            :image="post.image"
            @click="goToArticle(post.id)"
          />
        </div>
      </aside>
    </div>
    <div class="headerSection">
      <div class="titleWithLine">
        <h2>Alle Nyheder</h2>
        <div class="line"></div>
      </div>
      <div class="filter">
        <font-awesome-icon icon="filter" />
      </div>
    </div>
<!-- Renders all articles -->
    <div class="cardGrid">
      <BaseCard
      v-for="post in articleCards"
      :key="post.id"
      variant="News"
      :title="post.title"
      :summary="post.summary"
      :date="post.date"
      :image="post.image"
      @click="goToArticle(post.id)"
    />
    </div>
  </div>

  <NewsletterModal
    v-model="showNewsletterModal"
    @submit="handleNewsletterSubmit"
  />
</main>
</template>

<style scoped>
.contentWrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-xl);
  align-items: start;
}
.featuredNews {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  cursor: pointer;
}
.newsImage img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}
.newsContent {
  display: flex;
  flex-direction: column;
}
.newsTitle {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: var(--space-sm);
}
.newsExcerpt {
  color: var(--textFont);
  margin-bottom: var(--space-md);
  line-height: var(--text-line-Height);
}
.readMoreBtn {
  padding: var(--space-sm) var(--space-lg);
  align-self: flex-start;
}
.sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
.newsletterSection {
  background-color: #98161D;
  color: white;
  padding: var(--space-lg);
  border-radius: 8px;
}
.newsletterTitle {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: var(--space-sm);
}
.newsletterText {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--space-md);
  color: white;
}
.sidebarNews {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}
.cardGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-md);
}
.filter{
  color: #525151;
  font-size: 2rem;
  margin-top: 10px;
}

@media (max-width: 1024px) {
  .contentWrapper {
    grid-template-columns: 1fr;
  }
  .sidebar {
    order: 1;
  }
}
</style>