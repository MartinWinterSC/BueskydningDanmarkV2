<script setup>
import {ref, onMounted, onUnmounted  } from 'vue';

const target = ref(null); //Ref til DOM
const isIntersecting = ref(false);//Boolean ref som hjælper os med at holde styr på om elemented er synligt i viewport

let observer; //Variable som gemmer intersectionObserver instans

//OnMounted vil sige det kører komponentet er blevet tilføjet til DOM
onMounted(() => {
    observer = new IntersectionObserver((entries) => { 
        entries.forEach(entry => {
          //opdaterer  isIntersecting bliver true og sektionen bliver synlig
            isIntersecting.value = entry.isIntersecting;
            //If statement som tjekker om sektionen er inde viewport og for observerens threshold. hvis synlig bliver "hidden" fjernet og Fade.in animation bliver tilføjet og spiller.
            if (entry.isIntersecting) {
                 target.value.classList.remove('hidden');
                 target.value.classList.add('fade-in');
                console.log('synlig')
            }
        });
    }, {
        root: null, //Observer i forhold til hele viewport
        threshold: 0.1 //Mængden et element skal være synlig før det bliver vist - 10%
    }); //Starter observation hvis elementet er tilgængeligt
    if(target.value) observer.observe(target.value) 
});
//Kører når komponentet bliver fjernet fra dom (efter den har kørt)
onUnmounted(() => {
    if(observer && target.value) { //If statement som tjekker elemented er synlig, hvis ja stopper observeren og fjernes fra dom.
        observer.unobserve(target.value);
        observer.disconnect();
    }
});
</script>

<template>
  <div ref="target" class="hidden">
    <slot /> <!--Tillader os at bruge andet indhold gemme slots.-->
  </div>
</template>

<style scoped>
.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.8s ease;
}

.hidden {
  opacity: 0;
  transform: translateY(20px);
  
}
</style>