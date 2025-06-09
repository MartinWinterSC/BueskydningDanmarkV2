<script setup>
import { ref } from 'vue'

const height = ref('')
const armspan = ref('')
const drawWeight = ref('')
const result = ref('')

function calculate() {
    const heightVal = parseFloat(height.value)
    const armspanVal = parseFloat(armspan.value)
    const drawWeightVal = parseFloat(drawWeight.value)

    let drawLength

    if (!isNaN(armspanVal)) {
        drawLength = (armspanVal / 2.54) / 2.5
    } else if (!isNaN(heightVal)) {
        drawLength = (heightVal / 2.54) / 2.5
    } else {
        result.value = 'Indtast mindst højde eller armspændvidde.'
        return
    }

    drawLength = drawLength.toFixed(2)

    let output = `Beregnede værdier:\nTræklængde: ${drawLength} tommer\nTrækstyrke: ${!isNaN(drawWeightVal) ? drawWeightVal + ' lbs' : 'ikke angivet'}\n`

    if (drawLength < 26 && drawWeightVal <= 25) {
        output += 'Anbefalet prisniveau: Budget bue (ca. 1000 kr)'
    } else if (drawLength >= 26 && drawLength <= 29 && drawWeightVal <= 35) {
        output += 'Anbefalet prisniveau: Mellemklasse (ca. 2000-3000 kr)'
    } else {
        output += 'Anbefalet prisniveau: Avanceret bue (3000+ kr)'
    }

    result.value = output
}
</script>

<template>
    <main>
        <div class="headerSection">
      <div class="titleWithLine">
        <h1>Find dit Udstyr</h1>
        <div class="line"></div>
      </div>
    </div>
        <section class="calculator">
            <div class="calculation">
                <img src="@/assets/Billeder/equipment.png" alt="">
                <div class="indputBoxes">
                    <div class="inputContainer">
                        <label for="height">Din Højde i cm</label>
                        <input type="number" id="height" v-model="height" placeholder="Højde i cm">
                    </div>
                    <div class="inputContainer">
                        <label for="armspan">Din Armspændvidde i cm</label>
                        <input type="number" id="armspan" v-model="armspan" placeholder="Armspændvidde i cm">
                    </div>
                    <div class="inputContainer">
                        <label for="drawWeight">Din Trækstyrke i Pund</label>
                        <input type="number" id="drawWeight" v-model="drawWeight" placeholder="Trækstyrke i Pund">
                    </div>
                </div>
            </div>
        <div class="results">
            <button @click="calculate">Beregn</button>
            <pre id="result">{{ result }}</pre>
        </div>
    </section>
    <section>
        <div class="titleWithLine">
            <h2>Anbefalet udstyr</h2>
            <div class="line"></div>
        </div>
        <div class="recommendedContainer">
            <div class="recommended">
                <img src="@/assets/Billeder/rød1.png" alt="">
                <p>HOYT RCRV PODIUM HÅNDSEKTION</p>
            </div>
            <div class="recommended">
                <img src="@/assets/Billeder/a062112_1.png" alt="">
                <p>KINETIC MENTUM CARBON BAMBOOM BEN</p>
            </div>
            <div class="recommended">
                <img src="@/assets/Billeder/119905-1.png" alt="">
                <p>EASTON VECTOR - SKAFTER (12 STK.)</p>
            </div>
        </div>
    </section>
</main>
</template>

<style scoped>
input{
    border-radius: var(--space-sm);
    background-color: #D9D9D9;
    color: #666666;
    text-align: center;
    padding: 10px;
}
.indputBoxes{
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    align-items: end;
}
label{
    margin-right: var(--space-sm);
}
.calculation, .results{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-md);
    margin-top: var(--space-md);
}
.calculation img{
    height: 400px;
}
button {
    font-size: 1rem;
    font-weight: 600;
    padding: var(--space-sm) var(--space-md);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    color: var(--BtnTextColor);
    background-color: var(--BtnColor);
}
button:hover {
    background-color: var(--BtnColorhover);
}

.recommendedContainer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
    margin: var(--space-md) 0;
}
.recommended img{
    width: 100%;
    height: 160px;
    object-fit: contain;
}
.recommended p{
    background-color: var(--BtnColor);
    color: var(--BtnTextColor);
    padding: var(--space-sm);
}
@media (max-width: 1000px){
    .inputContainer{
        display: flex;
        flex-direction: column;
        margin-top: var(--space-sm);
    }
    .recommendedContainer{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 550px){
    .calculation img{
        display: none;
    }
}
</style>