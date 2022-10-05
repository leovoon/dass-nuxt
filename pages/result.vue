<template>
    <div>
        <h1>Result</h1>

        <section>
            <ResultCards :result="result" />
        </section>

        <MazBtn size="lg" pastel block color="primary" @click="redo()">
            Redo
        </MazBtn>
        <MazDialog v-model="isOpen">
            <div class="maz-text-center maz-w-full maz-p-4">
                This will clear your saved result. Are you sure?
            </div>
            <template #footer>
                <MazBtn color="warning" @click="confirmRedo()">
                    Yes
                </MazBtn>
            </template>
        </MazDialog>

    </div>
</template>

<script setup>
import MazBtn from "maz-ui/components/MazBtn";
import MazDialog from 'maz-ui/components/MazDialog';

definePageMeta({
    middleware: ["protected"],
})

const result = useMeaning();
const isOpen = ref(false)


const redo = () => {
    isOpen.value = true
}

const confirmRedo = () => {
    const cookie = useCookie('answered');
    const answered = useAnswered()
    if (cookie) {
        cookie.value = null
        answered.value = []
    }
    isOpen.value = false
    window.location.href = '/questions/1'
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
</style>
