export default function () {
  const result = useResult()
  const { depress, anxiety, stress } = result.value
  let depressLevel, anxietyLevel, stressLevel

  if (depress >= 0 && depress <= 9) {
    depressLevel = 'Normal'
  } else if (depress >= 10 && depress <= 13) {
    depressLevel = 'Mild'
  } else if (depress >= 14 && depress <= 20) {
    depressLevel = 'Moderate'
  } else if (depress >= 21 && depress <= 27) {
    depressLevel = 'Severe'
  } else if (depress >= 28) {
    depressLevel = 'Extreme'
  }

  if (anxiety >= 0 && anxiety <= 7) {
    anxietyLevel = 'Normal'
  } else if (anxiety >= 8 && anxiety <= 9) {
    anxietyLevel = 'Mild'
  } else if (anxiety >= 10 && anxiety <= 14) {
    anxietyLevel = 'Moderate'
  } else if (anxiety >= 15 && anxiety <= 19) {
    anxietyLevel = 'Severe'
  } else if (anxiety >= 20) {
    anxietyLevel = 'Extreme'
  }

  if (stress >= 0 && stress <= 14) {
    stressLevel = 'Normal'
  } else if (stress >= 15 && stress <= 18) {
    stressLevel = 'Mild'
  } else if (stress >= 19 && stress <= 25) {
    stressLevel = 'Moderate'
  } else if (stress >= 26 && stress <= 33) {
    stressLevel = 'Severe'
  } else if (stress >= 34) {
    stressLevel = 'Extreme'
  }

  return useState('meaning', () => [
    {
      category: 'Depression',
      level: depressLevel,
    },
    { category: 'Anxiety', level: anxietyLevel },
    { category: 'Stress', level: stressLevel },
  ])
}
