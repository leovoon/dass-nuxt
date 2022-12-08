<script setup>
import { useThemeHandler } from 'maz-ui'
const { hasDarkTheme } = useThemeHandler();

const props = defineProps({ progress: Number });
const darkClass = computed(() => (hasDarkTheme.value ? 'dark' : ''))
const completeness = computed(() => props.progress === 100 ? 'complete' : '')
</script>

<template>
    <div class="progress-bar" :class="[darkClass, completeness]">
        <div class="progress-bar__fill" :class="darkClass" :style="{ width: `${props.progress}%` }">
        </div>
    </div>
</template>

<style>
.progress-bar {
    --progressBorderRadius: 15px;
    display: inline-flex;
    max-height: 10px;
    border-radius: var(--progressBorderRadius);
    width: 100%;
    height: 10px;
    background-color: var(--maz-color-primary-600);
    pointer-events: none;
    z-index: 10;
}

.progress-bar.complete {
    display: none;
}

.progress-bar.dark {
    background-color: var(--maz-bg-color-dark);

}

.progress-bar__fill {
    --progressBorderRadius: 15px;
    height: inherit;
    background-color: var(--maz-color-primary-800);
    transition: width 0.3s ease;
    border-radius: var(--progressBorderRadius);
}


.progress-bar__fill.dark {
    background-color: var(--maz-color-muted-light);

}
</style>