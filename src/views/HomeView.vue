<script setup>
import { ref, onMounted } from 'vue';
import TextImageSection from '@/components/SectionComponents/TextImageSection.vue';
import BaseCard from '@/components/Cards/BaseCard.vue';
import localNavigation from '@/components/Navigation/localNavigation.vue';
import Calendar from '@/components/Calendar.vue';
import instrucktorImg from '@/assets/Billeder/BoernOgInstruktoerBueskydning.jpeg';
import HeroImage from '@/assets/Billeder/heroImage.png';
import nySkytteImg from '@/assets/Billeder/nySkytte.png';
import StandardBtn from '@/components/Buttons/StandardBtn.vue';
import UptoTopBtn from '@/components/Buttons/UptoTopBtn.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const newsCards = ref([]);
const baseURL = "https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/";

const stripHtml = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

const shortenText = (text, length = 100) => {
  return text.length > length ? text.slice(0, length) + '...' : text;
};

const goTo = (path) => {
  if (path) {
    router.push(path);
  }
};

const goToArticle = (id) => {
  router.push({ name: 'Artikle', query: { id } });
};

onMounted(() => {
  fetch(baseURL + "news?per_page=3&_embed")
    .then(response => response.json())
    .then(data => {
      newsCards.value = data.map(post => ({
        id: post.id,
        variant: 'News',
        title: post.title.rendered,
        date: post.date?.slice(0, 10),
        summary: shortenText(stripHtml(post.content?.rendered || '')),
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        link: post.link || '#'
      }));
    })
    .catch(error => console.error("News fetch error (frontpage):", error));
});

const breadtekst = `Bueskydning Danmark er øverste faglige myndighed inden for Bueskydning i Danmark. Vi har en høj standart inden for vidensområderne; sikkerhed og regler, træningslære og afvikling af konkurrencer. Vi tilbyder bueskydning til alle niveauer. Vi ønsker at fremme bueskydning som amatøridræt såvel praktisk som teoretisk samt understøtte de skytter, som ønsker at dygtiggøre sig imod eliteskydning. Vi ønsker at engagere de skytter, der ønsker fællesskabet, og de skytter, der finder motivation i det autonome medlemskab via tilbud, som gør bueskydning relevant og nærværende.

Bueskydning Danmark er en del af et større fællesskab via medlemsskab af Danmarks Idrætsforbund (DIF) samt det internationale, europæiske og nordiske forbund i bueskydning; World Archery (WA), World Archery Europe (WAE) og World Archery Nordic (WAN). Via disse medlemsskaber og vores position, som værende den øverste faglige myndighed indenfor Bueskydning i Danmark, har vi ansvaret for at repræsentere dansk bueskydning samt vores foreninger i som udenfor Danmark.`;
</script>

<template>
<section class="HeroSection">
  <img :src="HeroImage" alt="Hero Image" class="HeroImage" />
  <div class="HeroContent">
    <h1>Bueskydning Danmark</h1>
    <h4>Det er sjovt at skyde med bue!</h4>
  </div>
  <div class="LocalNav">
    <localNavigation />
  </div>
</section>

<main>
  <div class="headerSection">
    <div class="titleWithLine">
      <h1>Om Bueskydning Danmark</h1>
      <div class="line"></div>
    </div>
  </div>

  <section class="HomeSection">
    <TextImageSection 
      :Breadtekst="breadtekst"
      :image="instrucktorImg"
    />
  </section>

  <section class="newArcherSection">
    <img :src="nySkytteImg" alt="New Archer Image" class="newArcherImg" />
    <div class="newArcherContainer">
      <div class="newArcherContent">
        <h2>Er du ny skytte?</h2>
        <div class="NewArcherContentText">
          <p>
            Drømmer du om at prøve kræfter med bueskydning? Uanset om du er barn, voksen eller noget midt imellem, er bueskydning en sport for alle.
            Som ny skytte bliver du en del af et fællesskab, hvor der er plads til både sjov, fordybelse og personlig udvikling.
          </p>
          <p>Find ud af hvor du kan afprøve bueskydning henne tæt på dig</p>
        </div>
      </div>
      <div class="NewArcherContentFooter">
        <StandardBtn variant="primary" @click="$router.push('klubOversigtView')">Se klub oversigt</StandardBtn>
        <StandardBtn variant="primary" @click="$router.push('proevBueskydning')">Prøv bueskydning</StandardBtn>
      </div>    
    </div>
  </section>

  <section class="headerSection">
    <div class="titleWithLine">
      <h2>Kalender</h2>
      <div class="line"></div>
    </div>
    <Calendar />
  </section>

  <section class="headerSection"> 
    <div class="titleWithLine">
      <h2>Nyeste Nyheder</h2>
      <div class="line"></div>
    </div>
    <div class="cardGrid">
      <BaseCard 
        v-for="(card, index) in newsCards"
        :key="card.title"
        v-bind="card"
        @click="goToArticle(card.id)"
      />
    </div>
    <div class="seeMoreBtnContainer">
      <StandardBtn variant="primary" @click="goTo('/newsView')">Se flere Nyheder</StandardBtn>
    </div>
  </section>
  <UptoTopBtn />
</main>
</template>

<style scoped>
.HeroSection {
  position: relative;
  width: 100%;
}
.HeroImage {
  width: 100%;
  height: 30rem;
  display: block;
  object-fit: cover;
}
.HeroContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
  padding: 1rem
}
.HeroContent h1 {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
}
.HeroContent h4 {
  font-size: var(--Font-h2Size);
  font-weight: bold;
}
.LocalNav {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.newArcherSection {
  display: grid;
  grid-template-columns: 1fr 400px 400px;
  position: relative;
  margin: 0 5vw;
}
.newArcherImg {
  grid-column: 1 / span 2;
  height: 60vh;
  position: relative;
  z-index: 1;
  object-fit: cover;
  width: 100%;
}
.newArcherContainer * {
  margin: 25px 0;
}
.newArcherContainer {
  grid-column: 2 / span 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 2;
  background-color: #98161D;
  padding: 40px;
  border-radius: 15px;
}
.NewArcherContentFooter button {
  margin: 5px;
}
.NewArcherContentText {
  max-width: 60ch;
  margin: 0 auto;   
}
.newArcherContainer h2,
.newArcherContainer p {
  color: white;
  margin-top: 0;
}

.newArcherContent {
  margin: 0;
}
.newArcherContent p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: var(--space-md);
  color: white;
}
.NewArcherContentFooter {
  display: flex;
  justify-content: space-around;
  margin: 0;
}
.NewArcherContentFooter * {
  margin: 0;
}
.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}
main .headerSection:first-child {
  margin-top: 50px;
}
.seeMoreBtnContainer{
  display: flex;
  justify-content: center;
  margin-top: var(--space-sm);
}
@media (max-width: 768px) {
  .NewArcherContent h2 {
    font-size: 1.5rem;
  }
  .HomeSection h1 {
    font-size: 2rem;
  }
  main .headerSection:first-child{
    margin-top: 100px;
  }
}
@media (max-width: 1000px) {
  .newArcherSection {
    display: flex;
    flex-direction: column;
  }
  .newArcherContainer {
    position: relative;
    top: unset;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    margin-top: -20px;
    border-radius: 15px;
    padding: 20px;
  }
   .newArcherImg {
    width: 100%;
    height: auto;
    border-radius: 15px;
    margin-bottom: -20px;
  }
}
@media (max-width: 1000px) {
  .NewArcherContentFooter{
    flex-direction: column;
  }
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