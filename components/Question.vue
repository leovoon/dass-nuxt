<template>
    <div :class="{ dark: hasDarkTheme }">
        <p>
            {{ question.text }}
        </p>
    </div>
</template>

<script setup>
import { useThemeHandler } from "maz-ui";
const { hasDarkTheme } = useThemeHandler();
defineProps({ question: Object });

</script>

<style scoped>
div {
    background-color: var(--maz-color-danger-600);
    color: var(--maz-color-white);
    padding: 1rem;
    margin-block: 1rem;
    border-radius: 5px;
    width: 100%;
}

.dark {
    background-color: var(--maz-bg-color-dark);
    color: var(--maz-color-white);
}

p {
    word-wrap: break-word;
    font-size: clamp(1.1rem, 2vw, 2rem);
}
</style>
