<script setup>
import { ref } from 'vue';

import FacebookLogo from '@/assets/FacebookLogo.png';
import InstagramLogo from '@/assets/InstagramLogo.png';
import Logo from '@/assets/BueskydningLogo.svg';
const email = ref('');
const isSubmitted  = ref(false);

function subscribeNewsletter() {
  if (email.value) {
    isSubmitted.value = true;

    setTimeout(() => {
      email.value = '';
      isSubmitted.value = false;
    }, 2000);
  }
}

</script>

<template>
  <footer class="footer">
    <div class="footerContainer">
      <!-- Logo and Social Media Section -->
      <div class="footerSection">
        <div class="socialSection">
            <img :src="Logo" alt="Logo" class="logo" />
          <h3 class="followText">Følg os på</h3>
          <div class="socialIcons">
            <a href="https://facebook.com" target="_blank" rel="noopener">
              <img :src="FacebookLogo" alt="Facebook" class="socialIcon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener">
              <img :src="InstagramLogo" alt="Instagram" class="socialIcon" />
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="footerSection">
        <h3 class="sectionTitle">Kontakt</h3>
        <div class="contactInfo">
          <p><strong>Email:</strong> info@bueskydningdanmark.dk</p>
          <p><strong>Telefon:</strong> +45 50274237</p>
          <p><strong>Telefon tid:</strong> 9.00-15.00 i hverdage</p>
          <p><strong>Adresse:</strong> Brønby Stadion 20<br>2605 Brønby</p>
          <p><strong>CVR:</strong> 89262712</p>
        </div>
      </div>

      <!-- Links Section -->
      <div class="footerSection linksSection">
        <h3 class="sectionTitle">Links</h3>
        <nav class="footerNav">
          <a href="#" class="footerLink">Fælleskab</a>
          <a href="#" class="footerLink">Kalender</a>
          <a href="#" class="footerLink">Stævner</a>
          <a href="#" class="footerLink">Træning</a>
          <a href="#" class="footerLink">Information</a>
          <a href="#" class="footerLink">Bredde</a>
          <a href="#" class="footerLink">Elite</a>
        </nav>
      </div>

      <!-- Newsletter Section -->
      <div class="footerSection newsletterSection">
        <h3 class="sectionTitle">Tilmeld vores newsletter</h3>
        <p class="newsletterDescription">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque.
        </p>
        <form @submit.prevent="subscribeNewsletter" class="newsletterForm">
          <input 
            type="email" 
            v-model="email" 
            placeholder="Din email adresse"
            class="newsletterInput"
            required
          >
          <button type="submit" class="newsletterButton">
            <template v-if="!isSubmitted">Tilmeld</template>
            <template v-else>
              <!-- Checkmark brought to us by the curtosy of Arthur D'huy -->
              <!-- https://codepen.io/led8/pen/yLLddyb -->
              <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
              <!-- End -->
            </template>
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #98161D;
  color: white;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
}

.footerContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  width: 100%;
}

.footerSection {
  display: flex;
  flex-direction: column;
}

/* Logo Section */
.logo {
  width: 300px;
  height: auto;
  margin-bottom: 20px;
}

.followText {
  font-size: 16px;
  margin-bottom: var(--space-md);
  font-weight: bold;
  color: white;
}

.socialIcons {
  display: flex;
  gap: 15px;
}

.socialIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: transform 0.2s ease;
}

.socialIcon:hover {
  transform: scale(1.1);
}

/* Contact Section */
.sectionTitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 0;
}

.contactInfo p {
  color: white;
  margin: 8px 0;
  line-height: 1.4;
}

/* Links Section */
.footerNav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footerLink {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s ease;
}

.footerLink:hover {
  color: var(--BtnColorhover);
  opacity: 0.8;
  text-decoration: underline;
}

/* Newsletter Section */
.newsletterDescription {
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 20px;
  color: white;
}

.newsletterForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.newsletterInput {
  padding: 12px 16px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
}

.newsletterButton {
  padding: 8px 20px;
  border: none;
  background-color: var(--BtnColor);
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s ease;
  font-size: 22px;
}

.newsletterButton:hover {
  background-color: var(--BtnColorhover);
}

/* Checkmark brought to us by the curtosy of Arthur D'huy */
/* https://codepen.io/led8/pen/yLLddyb */
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 4;
  stroke-miterlimit: 10;
  stroke: white;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}
.checkmark {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: green;
  stroke-miterlimit: 10;
  margin: 0 auto;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}
.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}
@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #fff;
  }
}
/* End */

@media (max-width: 768px) {
  .footerContainer {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  .logo {
    justify-content: center;
  }
  .socialIcons {
    justify-content: center;
  }
}
@media (max-width: 1024px) and (min-width: 769px) {
  .footerContainer {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}
</style>