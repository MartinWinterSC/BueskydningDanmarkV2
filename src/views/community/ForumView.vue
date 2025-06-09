<script setup>
import BaseCard from '@/components/Cards/BaseCard.vue';

const forumCards = [
  {
    variant: 'Simple',
    title: 'Testing',
    summary: 'This is a test so far. I just wanna see if this works.',
    image: ''
  },
  {
    variant: 'Simple',
    title: 'Testing 2',
    summary: 'This is a test so far. I just wanna see if this works.',
    image: ''
  },
  {
    variant: 'Simple',
    title: 'Testing 3',
    summary: 'This is a test so far. I just wanna see if this works.',
    image: ''
  }
];
</script>

<template>
<main>
  <div class="headerSection">
    <div class="titleWithLine">
      <h1>Forum</h1>
      <div class="line"></div>
    </div>
  </div>
  <section class="SubHeaderSection">
    <h2>Nye posts</h2>
    <div class="cardGrid">
      <article v-for="(post, index) in forumCards" :key="`new-${index}`">
        <BaseCard v-bind="post" />
      </article>
    </div>
  </section>
  <section class="SubHeaderSection">
    <h2>Populære posts</h2>
    <div class="cardGrid">
      <article v-for="(post, index) in forumCards" :key="`popular-${index}`">
        <BaseCard v-bind="post" />
      </article>
    </div>
  </section>
</main>
</template>

<style>
.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  justify-content: center;
  max-width: 1000px;
  margin: 1rem auto 0;
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