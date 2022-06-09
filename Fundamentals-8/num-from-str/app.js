// 8 kyu
// Get number from string

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

const getNumberFromString = s => +s.replace(/\D/g, '')

// Solution without RegEx

const getNumberFromString = s =>
  Number(
    s
      .split('')
      .filter(el => '0123456789'.includes(el))
      .join('')
  )