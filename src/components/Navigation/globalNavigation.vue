<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import globalNavData from './globalNavData.js'

// 1: Sets up the function needed for using the Vue router (Being able to go between pages)
// 2: Sets up the function for the mobile menu, by default it's closed
// 3: Sets up the function for the sub menus in mobile size, by default it's closed
const route = useRoute()
const isMobileMenuOpen = ref(false)
const openSubmenu = ref(null)

// watches for triggers on the two functions below, Ie. if the mobile menu is opened or any of the children are
watch(route, () => {
  isMobileMenuOpen.value = false
  openSubmenu.value = null
})

// A function that when executed, will invert the boolean of the mobile menu (When open it'll close and when closed it's open)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Same as above but for the sub menu
const toggleSubmenu = (label) => {
  openSubmenu.value = openSubmenu.value === label ? null : label
}
</script>

<template>
  <header>
    <nav class="nav">
      <div class="navTopBar">
        <!-- Routerlink to the appropriate page, see index.js under "path" to see where that exactly is -->
        <router-link to="/" class="navLogoContainer">
          <img src="@/assets/BueskydningLogo.svg" alt="Logo" class="navLogo" />
        </router-link>
        <div class="rightAlign">
          <div class="searchFuntion" id="mobile">
            <font-awesome-icon icon="magnifying-glass" />
          </div>
          <!-- Sets mobile menu up under html, executes toggleMobileMenu on line 20 when clicked -->
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

      <!-- Sets up the navigation list, pulls the data from globalNavData.js, loops through it to make the actual HTML -->
      <ul class="navList" :class="{ open: isMobileMenuOpen }">
        <li
          v-for="(item, index) in globalNavData"
          :key="item.label"
          class="navItem"
          :class="{ lastItem: index === globalNavData.length - 1 }"
        >
          <!-- Executes the toggleSubmenu function if clicked. Line 25 for reference -->
          <div
            class="navLabelWrapper"
            @click="item.children ? toggleSubmenu(item.label) : null"
          >
            <router-link
              v-if="item.to"
              :to="item.to"
              class="navLink"
            >
              <span>{{ item.label }}</span>
            </router-link>
            <span v-else class="navLabel">{{ item.label }}</span>
            
            <!-- Asks if there are any children under the 'parent' navlink, if so creates the navIcon next to the navlink -->
            <span
              v-if="item.children"
              class="navIcon"
              :class="{ rotated: openSubmenu === item.label }"
            >
              <font-awesome-icon icon="chevron-down" />
            </span>
          </div>

          <!-- Sets up the child items -->
          <ul
            v-if="item.children"
            class="submenu"
            :class="{ open: openSubmenu === item.label }"
          >
            <li
              v-for="child in item.children"
              :key="child.label"
              class="dropdownItem"
            >
              <router-link
                v-if="child.to"
                :to="child.to"
                class="dropdownLink"
              >
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
.navIcon {
  margin-left: var(--space-xs);
  display: inline-block;
  color: white;
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
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    width: 100%;
    padding: 0;
    display: block;
  }

  .submenu.open {
    max-height: 500px;
    padding: 0.5rem 0;
  }

  .navIcon {
    display: inline-block;
    transition: transform 0.3s ease;
    margin-left: 0.5rem;
  }

  .navIcon.rotated {
    transform: rotate(180deg);
  }

  .navLabelWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .navItem {
    text-align: center;
    margin-top: var(--space-md);
  }

  .navItem.lastItem {
    padding-bottom: 2rem;
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

@media screen and (min-width: 1201px) {
  .navItem:hover .submenu {
    display: block;
  }

  .navItem:hover .navIcon {
    transform: rotate(180deg);
  }
}
</style>