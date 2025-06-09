<script setup>
const props = defineProps({
    Breadtekst: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class="TextImageSection">
        <div class="TextImageContent">
            <div class="TextContent">
                <p v-for="(line, i) in Breadtekst.split('\n\n')" :key="i">{{ line }}</p>
            </div>
            <div class="ImageContent">
                <img :src="image" alt="Section Image" />
            </div>
        </div>
    </div>
</template>

<style scoped> 

.TextImageSection {
    width: 100%;
    margin: 20px 0;
}

.TextImageContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20px;
}

.TextContent p {
    font-size: 1rem;
    line-height: var(--text-line-Height);
    color: var(--textFont);
    margin-bottom: var(--space-md);
    max-width: 80ch;
}

.ImageContent {
    display: flex;
    justify-content: center;
}

.ImageContent img {
    width: 75%;
    /* max-width: 60vh; */
    height: auto;
    object-fit: cover;
}


/* Mobile responsivt */
@media (max-width: 768px) {
    .TextImageContent {
        grid-template-columns: 1fr;
    }
    
    .TextContent {
        order: 2;
    }
    
    .ImageContent {
        order: 1;
    }
}
</style>