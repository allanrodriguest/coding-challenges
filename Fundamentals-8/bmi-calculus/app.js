// Calculate BMI

// DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmIndex = weight / Math.pow(height, 2)
  if (bmIndex <= 18.5) return 'Underweight'
  else if (bmIndex <= 25) return 'Normal'
  else if (bmIndex <= 30) return 'Overweight'
  else return 'Obese'
}

// One Liner

function bmi(weight, height) {
  const $ = weight / height ** 2
  return $ <= 18.5
    ? 'Underweight'
    : $ <= 25.0
    ? 'Normal'
    : $ <= 30.0
    ? 'Overweight'
    : 'Obese'
}