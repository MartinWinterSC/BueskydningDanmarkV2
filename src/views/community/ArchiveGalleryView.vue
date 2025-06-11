<script setup>
import { ref, onMounted } from 'vue';

// 1: Empty array to store rally result entries fetched from WordPress
// 2: Sets base URL for the fetch request coming later, this path is universal across all fetch requests
const media = ref([]);
const baseURL = "https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/";

// Stores the currently selected image (the one that'll be shown in the modal)
const selectedImage = ref(null);

// Opens the modal with the selected image
const openModal = (image) => {
    selectedImage.value = image;
};

// Closes the modal (sets selected image to null)
const closeModal = () => {
    selectedImage.value = null;
};

// Actual fetch request, specifically from "media" (currently, will be a custom post type later)
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
<!-- Image with click-to-open modal -->
            <img :src="item.url" :alt="item.name" @click="openModal(item)" />
            <p>{{ item.name }}</p>
        </div>
    </section>
<!-- Modal shown when an image is selected -->
    <div v-if="selectedImage" class="modalOverlay" @click.self="closeModal">
        <div class="modalContent">
            <button class="closeBtn" @click="closeModal">×</button>
            <img :src="selectedImage.url" :alt="selectedImage.name" />
            <p>{{ selectedImage.name }}</p>
        </div>
    </div>
</main>
</template>

<style scoped>
.imageContainer{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--space-sm);
    row-gap: var(--space-lg);
}
.imageContainer img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.imageContainer p{
    text-align: center;
    text-wrap: wrap;
    overflow-wrap: break-word;
}
main{
    margin-top: 50px;
    margin-bottom: 50px;
}
h1{
    margin-bottom: 25px;
}

.modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.modalContent {
    position: relative;
    background: var(--color-background);
    padding: 1rem;
    border-radius: 8px;
    width: 90vw;
    height: 90vh;
    overflow: auto;
    text-align: center;
}
.modalContent img {
    width: 100%;
    height: 80vh;
    object-fit: contain;
}
.closeBtn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--Main-color);
    cursor: pointer;
}
</style>