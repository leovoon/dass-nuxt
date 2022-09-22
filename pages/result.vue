<template>
    <div>
        <h1>Result</h1>

        <section>
            <div class="card" :class="{'dark': hasDarkTheme}" v-for="{ category, level } in result">
                <img :src="`/emotion/${level.toLowerCase()}.png`" :alt="level" />
                <div class="description">
                    <h2>{{ category }}</h2>
                    <MazBadge pastel class="level" :color="getColor(level)">
                        {{ level }}
                    </MazBadge>
                </div>
            </div>
        </section>

        <MazBtn size="lg" pastel block color="primary" @click="redo()">
            Redo
        </MazBtn>
    </div>
</template>

<script setup>
import MazBadge from "maz-ui/components/MazBadge";
import MazBtn from "maz-ui/components/MazBtn";
import { useThemeHandler } from "maz-ui";

definePageMeta({
    middleware: ["protected"],
})

const result = useMeaning();
const { hasDarkTheme } = useThemeHandler();

const getColor = (level) => {
    switch (level) {
        case "Normal":
            return "secondary";
        case "Mild":
            return "success";
        case "Moderate":
            return "info";
        case "Severe":
            return "warning";
        case "Extreme":
            return "danger";
        default:
            return "info";
    }
};

const redo = async () => {
    const cookie = useCookie('answered');
    const answered = useAnswered()
    if (cookie) {
        cookie.value = null
        answered.value = []
    }
    await navigateTo('/questions/1', { replace: true })
}
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: clamp(1rem, 5vw, 2rem);
    margin-bottom: 1rem;

    justify-items: start;
    align-items: flex-start;
}

.card {
    color: var(--maz-color-muted-light);
    padding: 0.2rem;
    border-radius: 10px;
}

.card.dark {
    color: var(--maz-color-muted-dark);
}

img {
    aspect-ratio: 1;
    height: 110px;
    image-rendering: pixelated;
}

.description {
    width: 100%;
    padding: 0.2rem;
    display: inline-block;
}

.level {
    margin-block-end: 10px;
}
</style>
