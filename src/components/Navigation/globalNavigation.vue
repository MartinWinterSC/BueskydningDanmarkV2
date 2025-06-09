<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import globalNavData from './globalNavData.js'

// Mobile menu toggle
const route = useRoute()
const isMobileMenuOpen = ref(false)

watch(route, () => {
  isMobileMenuOpen.value = false
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header>
    <nav class="nav">
      <div class="navTopBar">
        <router-link to="/" class="navLogoContainer">
          <img src="@/assets/BueskydningLogo.svg" alt="Logo" class="navLogo" />
        </router-link>
        <div class="rightAlign">
          <div class="searchFuntion" id="mobile">
            <font-awesome-icon icon="magnifying-glass" />
          </div>
          <div
            class="mobileMenu"
            :class="{ active: isMobileMenuOpen }"
            @click="toggleMobileMenu"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <ul class="navList" :class="{ open: isMobileMenuOpen }">
        <li v-for="item in globalNavData" :key="item.label" class="navItem">
          <router-link v-if="item.to" :to="item.to" class="navLink">
            <span>{{ item.label }}</span>
            <span v-if="item.children" class="navIcon">
              <font-awesome-icon icon="chevron-down" />
            </span>
          </router-link>
          <span v-else class="navLabel">
            {{ item.label }}
            <span v-if="item.children" class="navIcon">
              <font-awesome-icon icon="chevron-down" />
            </span>
          </span>
          <ul v-if="item.children" class="submenu">
            <li v-for="child in item.children" :key="child.label" class="dropdownItem">
              <router-link v-if="child.to" :to="child.to" class="dropdownLink">
                {{ child.label }}
              </router-link>
              <span v-else class="dropdownLabel">{{ child.label }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="searchFuntion" id="desktop">
        <font-awesome-icon icon="magnifying-glass" />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navLogo {
  width: 10rem;
  height: auto;
  vertical-align: middle;
}
.rightAlign {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
.nav {
  background: #98161d;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#mobile {
  display: none;
}
.navInner {
  display: flex;
  align-items: center;
  column-gap: 2rem;
  width: 100%;
}
.navLogoContainer {
  flex-shrink: 0;
}
.navList {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 5;
}
.navItem {
  position: relative;
  padding: var(--space-xs);
}
.navLink,
.navLabel {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}
.navLink:hover {
  text-decoration: underline;
}
.submenu {
  list-style: none;
  position: absolute;
  background: #98161d;
  padding: 0.5rem;
  display: none;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 160px;
}
.navItem:hover .submenu {
  display: block;
}
.navIcon {
  margin-left: var(--space-xs);
  display: inline-block;
}
.navItem:hover .navIcon {
  transform: rotate(180deg);
}
.dropdownLink,
.dropdownLabel {
  display: block;
  padding: var(--space-xs);
  color: #fff;
  text-decoration: none;
}
.dropdownLink:hover {
  background: #c22b30;
}
.navTopBar {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
}
.searchFuntion {
  color: white;
  font-size: 25px;
}
.mobileMenu {
  height: 35px;
  width: 35px;
  position: relative;
  cursor: pointer;
  display: none;
}
.mobileMenu span {
  height: 4px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s ease;
}
.mobileMenu span:nth-child(1) {
  top: 25%;
}
.mobileMenu span:nth-child(2) {
  top: 50%;
}
.mobileMenu span:nth-child(3) {
  top: 75%;
}
.mobileMenu.active span {
  background-color: white;
}
.mobileMenu.active span:nth-child(1) {
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.mobileMenu.active span:nth-child(2) {
  opacity: 0;
}
.mobileMenu.active span:nth-child(3) {
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}
@media screen and (max-width: 1200px) {
  .navInner {
    justify-content: space-between;
  }
  .nav {
    display: block;
    position: relative;
  }
  .navList {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #98161d;
    z-index: 20;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }
  .navList.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .submenu {
    position: static;
    display: block;
    padding-left: 0;
  }
  .navItem:hover .submenu {
    display: block !important;
  }
  .navIcon {
    display: none;
  }
  .navItem {
    text-align: center;
    margin-top: var(--space-md);
  }
  #mobile {
    display: block;
  }
  #desktop {
    display: none;
  }
  .mobileMenu {
    display: block;
  }
}
</style>