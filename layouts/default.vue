
<template>
    <main class="app" :class="{
    '--has-dark-theme': hasDarkTheme,
    '--has-light-theme': hasLightTheme,
    }">
        <!-- Theme switching -->
        <div>
            <header>
                <h2>DASS</h2>
                <p>Stress, Anxiety, Depression Test</p>
            </header>
            <nav>
                <MazBtn color="primary" size="sm" to="/">Home</MazBtn>
                <MazBtn type="button" size="sm" color="info" @click="toggleTheme">
                    Toggle theme
                </MazBtn>
            </nav>
        </div>
        <slot />
    </main>
</template>


<script lang="ts" setup>
import { useThemeHandler } from 'maz-ui'
import type { ThemeHandlerOptions } from 'maz-ui'
import MazBtn from 'maz-ui/components/MazBtn'

// optional
const options: ThemeHandlerOptions = {
    /* should be "dark" to works with maz-ui */
    darkClass: 'dark',
    /* local storage preferences */
    storageThemeKey: 'theme',
    storageThemeValueDark: 'dark',
    storageThemeValueLight: 'light',
}

const {
    autoSetTheme,
    toggleTheme,
    hasDarkTheme,
    hasLightTheme
} = useThemeHandler(options)

onMounted(() => {
    autoSetTheme()
})

</script>


<style scoped>
main {
    min-height: 100vh;
    padding: .4rem;
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
}



header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .2rem;
    background-color: var(--maz-color-primary-600);
    color: var(--maz-color-white);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

h2 {
    line-height: 1.2;
}


nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
</style>