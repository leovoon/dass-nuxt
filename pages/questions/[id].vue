<template>
    <section>
        <Question :question="currentQuestion" />
        <Answers :answers="scales" @select-ans="handleSelected" :questionId="id" />
        <div class="control">
            <MazBtn size="lg" color="warning" :to="`/questions/${prevQuestion}`" v-if="notFirstQuestion">back</MazBtn>

            <MazBtn v-if="checkNoValue" size="lg" disabled>
                {{ !notLastQuestion ? "Get Result" : "Next" }}
            </MazBtn>
            <MazBtn v-else size="lg" @click="saveAns" color="info"
                :to="!notLastQuestion ? '/result' : `/questions/${nextQuestion}`">
                {{ !notLastQuestion ? "Get Result" : "Next" }}
            </MazBtn>

        </div>

    </section>
</template>

<script setup>
import MazBtn from "maz-ui/components/MazBtn";
import Answers from "~~/components/Answers.vue";
import Question from "~~/components/Question.vue";
const scales = useScale();
const questions = useQuestions();
const answered = useAnswered();

const route = useRoute();
const id = Number(route.params.id);

const selected = ref(null);
const currentQuestion = ref(questions.value[id - 1]);
const notFirstQuestion = computed(() => id > 1);
const prevQuestion = computed(() => id - 1);
const nextQuestion = computed(() => id + 1);
const notLastQuestion = computed(() => id < questions.value.length);

function handleSelected(payload) {
    selected.value = payload;
}

const checkNoValue = computed(() => {
    return selected.value === null || selected.value === undefined
})

async function saveAns() {
    if (selected.value === null) return;
    const cookie = useCookie("answered");

    const ans = {
        id: id,
        ans: selected.value,
        category: currentQuestion.value.category,
    };
    // if already answered this question update the answer
    const index = answered.value.findIndex((item) => item.id === id);
    if (index !== -1) {
        answered.value[index] = ans;
    } else {
        answered.value.push(ans);
    }

    cookie.value = answered.value;
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    flex: 1;
    min-width: 300px;
}

@media (min-width: 768px) {
    /* section {
        max-width: max-content;
    } */
}

.control {
    margin-block: 2rem;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}
</style>
