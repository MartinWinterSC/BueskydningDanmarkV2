<script setup>


const props = defineProps({
  athlete: Object,
  visible: Boolean
});

const emit = defineEmits(['close']);
</script>

<template>
  <div v-if="visible" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="emit('close')">X</button>

      <!-- Athlete content -->
      <div class="athlete-profile">
        <img class="background" :src="athlete.banner" />
        <div class="left-panel">
          <img class="portrait" :src="athlete.image" />
          <div class="club-banner">
            <img :src="athlete.clubLogo || ''" />
          </div>
        </div>
        <div class="info">
          <div class="right-panel">
            <h2>{{ athlete.name }}</h2>
            <p><strong>Fødselsdag:</strong> {{ athlete.birthdate || 'Ikke oplyst' }}</p>
            <p><strong>Bue:</strong> {{ athlete.bow || 'Ukendt' }}</p>
            <p><strong>Klub:</strong> {{ athlete.club }}</p>
            <div class="socials">
              <a href="#"><img src="" /></a>
            </div>
          </div>
          <div class="StatBoxes">
             <div class="stat">
              <font-awesome-icon icon="fa-solid fa-medal" class="stat-icon" />
              <p>Bedste score</p>
              <strong>{{ athlete?.bestScore || 'N/A' }}</strong>
            </div>

            <div class="stat">
              <font-awesome-icon icon="fa-solid fa-arrow-up" class="stat-icon" />
              <p>World Ranking</p>
              <strong>{{ athlete?.worldRanking || 'N/A' }}</strong>
            </div>

            <div class="stat" id="rallies">
              <font-awesome-icon icon="fa-solid fa-earth-europe" class="stat-icon" />
              <p>Internationale stævner</p>
              <a href="#"><strong>Klik her</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 800px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 30px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50px;
  cursor: pointer;
}

.background{
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.left-panel {
  float: left;
  width: 40%;
  text-align: center;
}

.right-panel {
  float: right;
  width: 60%;
}

.portrait {
  width: 100%;
  border-radius: 50%;
}

.StatBoxes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xs);
}
.right-panel p{
  margin-top: var(--space-md);
}

.stat {
  border: 4px solid #a00;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
}
.left-panel{
  background-color: var(--Main-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
}
.portrait{
  width: 103%;
  transform: translateY(-50%);
}
.club-banner img{
  width: 80%;
  transform: translateY(-40%);
}
.info{
  display: flex;
  flex-direction: column;
  padding: var(--space-lg);
}
@media (max-width: 800px){
  .stats-boxes{
    grid-template-columns: repeat(2, 1fr);
  }
  #rallies {
    grid-column: span 2;
  }
}
@media (max-width: 800px){
  .left-panel{
    background-color: unset;
    margin-top: -20%;
  }
  .club-banner{
    display: none;
  }
  .athlete-profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .portrait{
    transform: translateY(0);
  }
}
</style>
