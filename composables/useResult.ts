export default function () {
  const answered = useAnswered()
  const questions = useQuestions()
  if (
    Array.isArray(answered.value) &&
    answered.value.length === questions.value.length
  ) {
    const result =
      Array.isArray(answered.value) &&
      answered.value.reduce((acc, cur) => {
        const { category, ans } = cur
        if (acc[category]) {
          acc[category] += ans
        } else {
          acc[category] = ans
        }
        return acc
      }, {})

    return useState('result', () => result ?? {})
  }
}
