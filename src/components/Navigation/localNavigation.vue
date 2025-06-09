<template>
  <div class="localNavigation">
    <div class="navContainer">
      <router-link to="/EquipmentView" class="navItem">
        <div class="navIcon">
          <img src="@/assets/Billeder/Vector.png" alt="" class="oddOneOut">
        </div>
        <span class="navText">Bue udregner</span>
      </router-link>
      
      <router-link to="/CalendarMainView" class="navItem">
        <div class="navIcon">
          <font-awesome-icon :icon="['far', 'calendar']" />
        </div>
        <span class="navText">Kalender</span>
      </router-link>
      
      <router-link to="/communityMainView" class="navItem">
        <div class="navIcon">
          <font-awesome-icon icon="users" />
        </div>
        <span class="navText">Fælleskabbet</span>
      </router-link>
      
      <router-link to="/ArchiveRallyView" class="navItem">
        <div class="navIcon">
          <font-awesome-icon icon="medal" />
        </div>
        <span class="navText">Resultater</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

.navIcon{
  font-size: 50px;
}
.oddOneOut{
  height: 50px;
}
.localNavigation {
  width: 700px;
}

.navContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  border-radius: 12px;
  background-color: #064373;
}

.navItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: #064373;
  padding: 16px 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  padding: 25px;
}

.navItem:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.navIcon {
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navText {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: white;
  line-height: 1.3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .localNavigation {
    padding: 16px;
    border-radius: 12px;
    width: 350px;
  }
  
  .navContainer {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .navItem {
    padding: 20px;
  }
  
  .navIcon {
    /* width: 32px;
    height: 32px; */
    margin-bottom: 8px;
  }
  
  .navText {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .navContainer {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  
  /* .navItem {
    padding: 15px;
  } */
  
  /* .navIcon {
    width: 28px;
    height: 28px;
  } */
  
  .navText {
    font-size: 11px;
  }
}
</style>