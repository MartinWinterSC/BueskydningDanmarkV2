<script setup>
import { onMounted } from 'vue'

let toTopButton


onMounted(() => {
  toTopButton = document.querySelector(".toTopButton")

    toTopButton.addEventListener('animationend', () => {
        if (toTopButton.classList.contains('bounceIn')) {
        toTopButton.classList.remove('bounceIn')
        }
    })

    window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (toTopButton.style.display !== "block") {
        toTopButton.style.display = "block"
        toTopButton.classList.add("bounceIn")
      }
    } else {
      toTopButton.style.display = "none"
    }
}
})

function toTopFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
<div>
    <button @click="toTopFunction()" class="toTopButton">Ʌ</button>
</div>
</template>

<style scoped>

.toTopButton {
  position: fixed;
  bottom: 1.5rem;
  right: 2rem;
  z-index: 999;
  outline: none;
  border: none;
  background-color: var(--BtnColor);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.bounceIn{
    animation: bounceIn 0.5s ease;
}


.toTopButton:hover{
    background-color: var(--BtnColorhover);
    animation: hoverBounce 0.3s ease;
}

@keyframes bounceIn{
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    50% {
        transform: translateY(-10px);
    }
     80% {
        transform: translateY(5px);
    }
     100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes hoverBounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}

</style>