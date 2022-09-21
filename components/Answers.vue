<template>
  <div>
    <MazBtn size="lg" type="button" :pastel="hasLightTheme" @click="selectAnswer" v-for="answer in answers"
      :color="answer.color" :class="{ active: selected === answer.value }" v-bind:class="{ dark: hasDarkTheme }">
      {{ answer.value }}
    </MazBtn>
  </div>
</template>

<script setup>
import MazBtn from "maz-ui/components/MazBtn";
import { useThemeHandler } from "maz-ui";
const props = defineProps({ answers: Array, questionId: Number });
const emit = defineEmits(["selectAns"]);
const selected = ref(null);
const answered = useAnswered()

const { hasDarkTheme, hasLightTheme } = useThemeHandler();

function selectAnswer(event) {
  const ans = event.target.children[0]?.innerText;
  selected.value = Number(ans);
  emit("selectAns", selected.value);
}

onMounted(() => {
  if (answered) {
    selected.value = answered.value.find((item) => item.id === props.questionId)?.ans;
    emit("selectAns", selected.value);
  };
});



</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}

.m-btn.active {
  outline: 4px solid var(--maz-color-primary-200);
}

.dark .m-btn.active {
  outline: 4px solid var(--maz-color-white);
}
</style>
