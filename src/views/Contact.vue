<script setup>
import { ref, onMounted } from 'vue';

const staff = ref([]);
const baseUrl = 'https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/';

onMounted(() => {
  fetch(`${baseUrl}staff?per_page=100&_embed`)
    .then(response => response.json())
    .then(data => {
      staff.value = data.map(post => ({
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        title: post.title?.rendered || '',
        name: post.acf?.navn || '',
        phone: post.acf?.tlfNumber || '',
        email: post.acf?.email || ''
      }));
    })
    .catch(error => console.error('Staff fetch error:', error));
});
</script>

<template>
<main>
    <section>
        <div class="headerSection">
      <div class="titleWithLine">
        <h1>Kontakt</h1>
        <div class="line"></div>
      </div>
    </div>
        <div class="contactContainer">
            <div class="contactElement">
                <img src="" alt="Telefon ikon" />
                <div class="contactSpecific">
                    <h3>Telefon</h3>
                    <p>+45 50 27 42 37</p>
                </div>
            </div>
            <div class="contactElement">
                <img src="" alt="Email ikon" />
                <div class="contactSpecific">
                    <h3>E-mail</h3>
                    <p>info@bueskydningdanmark.dk</p>
                </div>
            </div>
            <div class="contactElement">
                <img src="" alt="Betaling ikon" />
                <div class="contactSpecific">
                    <h3>Betalingsoplysninger</h3>
                    <p>
                        Reg.: 5510 <br />
                        Kontonr.: 0726835640 <br />
                        IBAN: DK7620000726835640 <br />
                        SWIFT: NDEADKKK <br />
                        CVR nr.: 89262712 <br />
                        MobilePay: 367368
                    </p>
                </div>
            </div>
            <div class="contactElement">
                <img src="" alt="Lokation ikon" />
                <div class="contactSpecific">
                    <h3>Lokation</h3>
                    <p>
                        Idrættens Hus <br />
                        Brøndby Stadion 20 <br />
                        2605 Brøndby
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="titleWithLine">
            <h2>Medarbejdere</h2>
            <div class="line"></div>
        </div>
        <p>OBS: Bueskydning Danmarks sekretariat holder sommerferielukket i uge 28, 29 og 30.</p>
        <div class="staffCardContainer">
            <div v-for="person in staff" :key="person.title" class="staffCard">
                <img :src="person.image" :alt="person.name" />
                <p>{{ person.title }}</p>
                <h3>{{ person.name }}</h3>
                <a v-if="person.phone" :href="`tel:${person.phone}`">TLF: {{ person.phone }}</a>
                <a v-if="person.email" :href="`mailto:${person.email}`">Email: {{ person.email }}</a>
            </div>
        </div>
    </section>
</main>
</template>

<style scoped>
.contactContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xs);
}
.contactElement {
    background: var(--Main-color);
    display: flex;
}
.contactSpecific p,
.contactSpecific h3 {
    color: white;
    padding: var(--space-xs);
}
.staffCardContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
}
.staffCard {
    background-color: var(--Main-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.staffCard p,
.staffCard h3,
.staffCard a {
    color: white;
    text-align: center;
}
.staffCard a {
    text-decoration: none;
    margin: var(--space-xs);
}
.staffCard p {
    margin: var(--space-xs);
}
.staffCard img {
    width: 80%;
    margin: var(--space-xs);
}
@media (max-width: 1000px) {
    .staffCardContainer {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 500px) {
    .staffCardContainer {
        grid-template-columns: 1fr;
    }
    .contactContainer {
        grid-template-columns: 1fr;
    }
}
</style>