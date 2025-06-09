<script setup>
import { useRouter } from 'vue-router';
import StandardBtn from '@/components/Buttons/StandardBtn.vue';

const router = useRouter();

function goToArchiveGalleryView() {
    router.push('/ArchiveGalleryView');
}
    
function goToArchiveRallyView() {
    router.push('/ArchiveRallyView');
}
</script>

<template>
<main>
    <h1>Arkiv</h1>
    <section>
        <h2>Billeder</h2>
        <div class="seeMoreBtnContainer">
            <StandardBtn variant="primary" @click="goToArchiveGalleryView">
                Se alle billeder
            </StandardBtn>
        </div>
    </section>
    <section>
        <h2>Video</h2>
        <div class="seeMoreBtnContainer">
          <StandardBtn variant="primary">Se alle videoer</StandardBtn>
        </div>
    </section>
    <section>
        <h2>Livestream</h2>
        <div class="seeMoreBtnContainer">
          <StandardBtn variant="primary">Se alle livestreams</StandardBtn>
        </div>
    </section>
    <section>
        <h2>Stævneresultater</h2>
        <div class="seeMoreBtnContainer">
            <StandardBtn variant="primary" @click="goToArchiveRallyView">
                Se alle stævneresultater
            </StandardBtn>
        </div>
    </section>
</main>
</template>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin-bottom: 0.5rem;
}
a {
    color: #007bff;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
section, h1{
    margin: 25px 0;
}
h2{
    margin: 10px 0;
}
</style>
