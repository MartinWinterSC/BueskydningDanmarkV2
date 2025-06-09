<script setup>
import { ref, onMounted } from 'vue';

const rallies = ref([]);
const baseURL = "https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/";

onMounted(() => {
  fetch(baseURL + "rallies?per_page=100&_embed")
    .then(response => response.json())
    .then(data => {
      rallies.value = data.map(post => ({
        name: post.title?.rendered || 'Uden titel',
        rallyResults: post.acf?.rallyResults || '#'
      }));
    })
    .catch(error => console.error("Rallies fetch error:", error));
});
</script>

<template>
  <main>
    <h1>Stævneresultater</h1>
    <section>
      <ul>
        <li v-for="(rally, index) in rallies" :key="index">
          <a :href="rally.rallyResults" target="_blank" rel="noopener noreferrer">
            {{ rally.name }}
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
section, h1, h2{
  margin: 10px 0;
}
</style>
