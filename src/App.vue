<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GlobalNavigation from './components/Navigation/globalNavigation.vue'
import Footer from './components/Navigation/Footer.vue'
</script>

<template>
  <div>
    <GlobalNavigation/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style scoped>


</style>
