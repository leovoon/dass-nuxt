<template>
    <div>
        <MazBtn to="/questions/1" no-underline>
            Start Test
        </MazBtn>
        <aside :class="{'dark': hasDarkTheme}">
            Please read each question and choose the answer 0,1,2, or 3 that best describes you. 0 being not at all and
            3 being very much.
        </aside>
        <details>
            <summary>
                Questionnaire Reference
            </summary>
            <p>Questionnaire DASS21 Prof Peter Lovibond UNSW Australia.
                <a href=" http://www2.psy.unsw.edu.au/dass/
                ">
                    http://www2.psy.unsw.edu.au/dass/
                </a>
            </p>
        </details>
        <MazDialog v-model="isOpen">
            <div class="maz-text-center maz-w-full maz-p-4">
                I give you a 🍪, you give me back, so you won't lose progress when refreshing.
            </div>
            <template #footer>
                <MazBtn color="info" @click="handleOk">
                    Ok I got it.
                </MazBtn>
            </template>
        </MazDialog>
    </div>

</template>

<script setup>
import MazBtn from 'maz-ui/components/MazBtn'
import MazDialog from 'maz-ui/components/MazDialog'
import { useThemeHandler } from 'maz-ui'
const { hasDarkTheme } = useThemeHandler();
const isOpen = ref(false)

const cookieConsent = useCookie('cookieConsent')

const handleOk = () => {
    cookieConsent.value = true
    isOpen.value = false
}


onMounted(() => {
    if (!cookieConsent.value) {
        setTimeout(() => {
            isOpen.value = true
        }, 2000)
    }

})

</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    min-height: 100%;
    justify-content: center;
    align-items: center;
}

aside,
details {
    margin-top: 2rem;
    margin-bottom: 1rem;
    max-width: 24rem;
    padding: 1rem;
    border-radius: 15px;
    color: var(--maz-color-muted-light);
    background-color: var(--maz-bg-color-light-light);
}

.dark {
    background-color: var(--maz-bg-color-dark);
    color: var(--maz-color-white);

}
</style>
