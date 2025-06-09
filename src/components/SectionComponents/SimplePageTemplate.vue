<script setup>
defineProps({
  image: String,
  title: String,
  subTitle: String
});
</script>

<template>
  <article class="templatepage">
    <img
      v-if="image"
      :src="image"
      :alt="title"
      class="templateimage"
    />

    <div class="templateContent">
      <h1 class="templateTitle">{{ title }}</h1>
      <p v-if="subTitle" class="templateSubtitle">{{ subTitle }}</p>

      <slot />
    </div>
  </article>
</template>


<style scoped>
.templateImage {
  width: 100%;
  height: auto;
  margin-bottom: var(--space-md);
  object-fit: cover;
}

.templateTitle {
  font-size: var(--Font-h1Size);
  font-weight: bold;
  margin-bottom: var(--space-md);
}

.templateSubtitle {
  font-size: var(--Font-h2Size);
  margin-bottom: var(--space-md);
  color: var(--gray-600);
}
</style>