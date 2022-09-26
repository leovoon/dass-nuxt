<template>
    <div class="card" :class="{'dark': hasDarkTheme}" v-for="{ category, level } in result">
        <img :src="`/emotion/${level.toLowerCase()}.png`" :alt="level" />
        <div class="description">
            <h2>{{ category }}</h2>
            <MazBadge pastel class="level" :color="getColor(level)">
                {{ level }}
            </MazBadge>
        </div>
    </div>
</template>

<script setup>
import MazBadge from "maz-ui/components/MazBadge";
import { useThemeHandler } from "maz-ui";

const props = defineProps({
    result: {
        type: Array,
        required: true,
    },
});

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


</script>

<style>
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