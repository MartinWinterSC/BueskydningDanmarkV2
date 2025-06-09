<script setup>
import { ref, onMounted } from 'vue';

const media = ref([]);
const baseURL = "https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/";

onMounted(() => {
  fetch(baseURL + "media?per_page=100&_embed")
    .then(response => response.json())
    .then(data => {
        media.value = data
        .filter(item => {
            const url = item.source_url?.toLowerCase() || '';
            return url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png');
        })
        .map(item => ({
            name: item.title?.rendered || 'Ingen titel',
            url: item.source_url
        }));
    })
    .catch(error => console.error("Media fetch error:", error));
});
</script>

<template>
  <main>
    <h1>Billeder</h1>
    <section class="imageContainer">
        <div v-for="(item, index) in media" :key="index">
            <img :src="item.url" :alt="item.name" />
            <p>{{ item.name }}</p>
        </div>
    </section>
  </main>
</template>

<style scoped>
    .imageContainer{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-sm);
        row-gap: var(--space-lg);
    }
    img{
        width: 100%;
        height: 200px;
        object-fit: contain;
    }
    .imageContainer p{
        text-align: center;
    }
    main{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    h1{
        margin-bottom: 25px;
    }
</style>